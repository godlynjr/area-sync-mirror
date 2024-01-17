const youtubeXgmail = async (req, res) => {
    try {
        const { youtubeUrl } = req.body; // Assuming the YouTube URL is sent in the request body

        // Extract channel ID from the YouTube URL
        const channelId = extractChannelId("https://www.youtube.com/channel/UCB9MTkhpPItfZVYF32Cz69w");

        // Monitor the channel for new video uploads
        monitorChannelForNewVideos(channelId);

        res.send({
            msg: Monitoring YouTube channel with ID ${channelId} for new videos.,
        });
    } catch (err) {
        console.error('Error processing YouTube X Gmail request:', err);
        res.status(500).send({
            error: 'Internal server error',
        });
    }
};

// Helper function to extract YouTube channel ID from the URL
const extractChannelId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|channel\/))(.[^\/\n\s]+)/);
    return match ? match[1] : null;
};

// Helper function to monitor a YouTube channel for new videos
const monitorChannelForNewVideos = async (channelId) => {
    // Use the YouTube Data API to get the latest videos from the channel
    const apiKey = process.env.API_KEY; // Replace with your YouTube API key
    const apiUrl = https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1;
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
            text: A new video titled "${videoTitle}" has been uploaded. Watch it here: https://www.youtube.com/watch?v=${videoId},
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};