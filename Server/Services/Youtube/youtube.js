const express = require('express');
const router = express.Router();
const axios = require('axios');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const { authorize } = require('passport');
// const { spotifyApi } = require('../Spotify/index');
const OAuth2Data = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.YOUTUBE_REDIRECT_URI
);
let UserEmail = '';
const SCOPES =
    ['https://www.googleapis.com/auth/youtube.readonly',
        'https://www.googleapis.com/auth/gmail.send',
        'https://www.googleapis.com/auth/youtube.force-ssl',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/userinfo.email'];

OAuth2Data.on('tokens', (tokens) => {
    if (tokens.refresh_token) {
        // store the refresh_token in my database!
        OAuth2Data.setCredentials({
            refresh_token: tokens.refresh_token
        });
    }
    OAuth2Data.setCredentials(tokens);
});

const youtube = google.youtube({
    version: "v3",
    auth: OAuth2Data,
});

const driver = google.drive({
    version: "v3",
    auth: OAuth2Data,
});

let redirectURL = '';

// Login route
const loginyt = async (req, res) => {
    redirectURL = req.headers.url;
    const url = OAuth2Data.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    res.send(url);
};

// Callback route
const Callback = async (req, res) => {
    const code = req.query.code
    if (code) {
        try {
            const { tokens } = await OAuth2Data.getToken(code);
            console.log('Successfully authenticated');
            OAuth2Data.setCredentials(tokens);
            const userProfile = await fetchUserEmail(tokens.access_token);
            UserEmail = userProfile;
            res.redirect(redirectURL);
        } catch (err) {
            console.log('Error authenticating')
            console.log(err);
        }
    }
};

// Function to fetch user profile information using the access token
const fetchUserEmail = async (accessToken) => {
    const response = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    if (!response.data || !response.data.email) {
        throw new Error('Failed to fetch user email');
    }

    return response.data.email;
};

//  AREA 1 ------------------
// Helper function to extract YouTube channel ID from the URL
const extractChannelId = async (url) => {
    const channelNameMatch = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|channel\/|@))([^\/\n\s]+)/);

    if (channelNameMatch) {
        const channelName = channelNameMatch[1];
        console.log("Name: ", channelName);
        const apiKey = process.env.API_KEY;

        const channelSearchUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=channel&q=${channelName}`;
        console.log("channelSearchUrl: ", channelSearchUrl);

        try {
            const response = await axios.get(channelSearchUrl);

            if (response.data.items && response.data.items.length > 0) {
                const channelId = response.data.items[0].id.channelId;
                console.log("Channel ID:", channelId);
                return channelId;
            } else {
                console.log('Aucune chaîne trouvée avec ce nom.');
                return null;
            }
        } catch (error) {
            console.error('Erreur lors de la recherche de la chaîne:', error);
            return null;
        }
    }
};

// Helper function to monitor a YouTube channel for new videos
const monitorChannelForNewVideos = async (channelId) => {
    // Use the YouTube Data API to get the latest videos from the channel
    const apiKey = process.env.API_KEY; // Replace with your YouTube API key
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;
    console.log("ApiURL", apiUrl);
    // Set up a periodic check (e.g., every hour) for new videos
    setInterval(async () => {
        try {
            const response = await axios.get(apiUrl);
            const latestVideo = response.data.items[0];

            // Check if there is a new video
            if (latestVideo) {
                // Send an email notification
                sendEmailNotification(latestVideo.snippet.title, latestVideo.id.videoId);
            }
        } catch (error) {
            console.error('Error fetching YouTube channel data:', error);
        }
    }, 300000); // 5 minutes interval (adjust as needed)
};

const gmailUser = 'admareasync6@gmail.com';
const gmailPassword = 'wrvkwtcacweahdmc';

// Helper function to send an email notification
const sendEmailNotification = async (videoTitle, videoId) => {
    try {
        // Set up Nodemailer transporter (replace with your email configuration)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: gmailUser,
                pass: gmailPassword,
            },
        });

        // Email content
        const mailOptions = {
            from: gmailUser,
            to: UserEmail,
            subject: 'New YouTube Video Uploaded',
            text: `A new video titled "${videoTitle}" has been uploaded. Watch it here: https://www.youtube.com/watch?v=${videoId}`,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

const youtubeXgmail = async (req, res) => {
    try {
        const { youtubeUrl } = req.body; // Assuming the YouTube URL is sent in the request body
        console.log('youtt', youtubeUrl);
        // Extract channel ID from the YouTube URL
        const channelId = await extractChannelId(youtubeUrl);
        monitorChannelForNewVideos(channelId);

        res.send({
            msg: `Monitoring YouTube channel with ID ${channelId} for new videos.`,
        });
    } catch (err) {
        console.error('Error processing YouTube X Gmail request:', err);
        res.status(500).send({
            error: 'Internal server error',
        });
    }
};

//  AREA 2 ------------------

const sendVideoToDrive = async (videoTitle, videoDescription, videoId) => {
    try {
        // Échappez les caractères spéciaux dans le titre de la vidéo
        const safeVideoTitle = videoTitle.replace(/[^\w\s]/gi, '');
        
        // Create a file metadata
        const fileMetadata = {
            name: `${safeVideoTitle}_Info.txt`, // Set a suitable file name
            mimeType: 'text/plain',
        };

        // Create the content of the text file
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const fileInfoContent = `Title: ${videoTitle}\nDescription: ${videoDescription}\nURL: ${videoUrl}`;

        // Check if a file with the same name and content already exists in Google Drive
        const existingFiles = await driver.files.list({
            q: `name='${fileMetadata.name}' and trashed=false`,
        });

        if (existingFiles.data.files.length > 0) {
            console.log('File already exists in Google Drive. Skipping upload.');
            return;
        }

        // Upload the text file to Google Drive
        const media = {
            mimeType: 'text/plain',
            body: fileInfoContent,
        };

        const driveResponse = await driver.files.create({
            resource: fileMetadata,
            media: media,
        });

        console.log('Video information uploaded to Google Drive:', driveResponse.data);
    } catch (error) {
        console.error('Error uploading video to Google Drive:', error);
    }
};


const youtubeXdrive = async (req, res) => {
        try {
            // Assuming the YouTube Data API is used to get the liked videos
            const likedVideosResponse = await youtube.videos.list({
                part: 'snippet',
                myRating: 'like',
                maxResults: 1,
            });

            const likedVideo = likedVideosResponse.data.items[0];

            if (likedVideo) {
                // Extract necessary information
                const videoTitle = likedVideo.snippet.title;
                const videoId = likedVideo.id;
                const videoDescription = likedVideo.snippet.description;

                // Call a function to send the video to Google Drive
                await sendVideoToDrive(videoTitle, videoDescription, videoId);
                res.send({
                    msg: `The liked video "${videoTitle}" infos has been sent to Google Drive.`,
                });

            } else {
                res.send({
                    msg: 'No liked videos found.',
                });
            }
            // Set a timeout to call this function again in 10 minutes
            // setTimeout(youtubeXdrive, 60000);
        } catch (err) {
            console.error('Error processing YouTube X Drive request:', err);
            res.status(500).send({
                error: 'Internal server error',
            });
        }
};

const youtubeXspotify = async (req, res) => {
    try {

    } catch (err) {
        console.error('Error processing YouTube X Sportify request:', err);
        res.status(500).send({
            error: 'Internal server error',
        });
    }
};

module.exports = {
    loginyt,
    Callback,
    youtubeXgmail,
    youtubeXdrive,
    youtubeXspotify,
    youtube,
};
