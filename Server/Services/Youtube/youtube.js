const express = require('express');
const router = express.Router();
const axios = require('axios');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
// const { spotifyApi } = require('../Spotify/index');
const OAuth2Data = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.YOUTUBE_REDIRECT_URI
);
const isAREA1 = false;
const SCOPES =
    ['https://www.googleapis.com/auth/youtube.readonly',
    'https://www.googleapis.com/auth/gmail.send',
    'https://www.googleapis.com/auth/youtube.force-ssl'];

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

// Login route
const loginyt = async (req, res) => {
    const url = OAuth2Data.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    res.redirect(url);
};

// Callback route
const Callback = async (req, res) => {
    const code = req.query.code
    if (code) {
        try {
            const {tokens} = await OAuth2Data.getToken(code);
            console.log('Successfully authenticated');
            OAuth2Data.setCredentials(tokens);
            res.send({
                msg: "Successfully loggeed in to Youtube",
            }); 
            // res.redirect('http://localhost:8081/Youtube');
        } catch(err) {
            console.log('Error authenticating')
            console.log(err);
        }
    }
};

const youtubeXgmail = async (req, res) => {
    try {
        const { youtubeUrl } = req.body; // Assuming the YouTube URL is sent in the request body

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
    }, 300000); // 1minutes interval (adjust as needed)
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
            to: 'jeanlucahoyo@gmail.com',
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

module.exports = {
    loginyt,
    Callback,
    youtubeXgmail,
    // youtubeXspotify,
    youtube,
};
