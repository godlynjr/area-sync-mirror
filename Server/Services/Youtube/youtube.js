const express = require('express');
const router = express.Router();
const { google } = require('googleapis');

const OAuth2Data = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

OAuth2Data.on('tokens', (tokens) => {
    if (tokens.refresh_token) {
      // store the refresh_token in my database!
      OAuth2Data.setCredentials({
            refresh_token: tokens.refresh_token
        });
    }
    OAuth2Data.setCredentials(tokens);
});

const authed = false;

// Login route
const loginyt = async (req, res) => {
    if (!authed) {
        const url = OAuth2Data.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/youtube.readonly'
        });
        res.redirect(url);
    } else {
        res.send('Already logged in');
    }
};

// Callback route
// const Callback = async (req, res) => {
//     const code = req.query.code
//     if (code) {
//         try {
//             const {tokens} = await OAuth2Data.getToken(code);
//             console.log('Successfully authenticated');
//             OAuth2Data.setCredentials(tokens);
//             authed = true;
//             res.send({
//                 msg: "Successfully loggeed in to Youtube",
//             }); 
//             // res.redirect('/')
//         } catch(err) {
//             console.log('Error authenticating')
//             console.log(err);
//         }
//     }
// };

// Connect YouTube to Discord
// const connect_yt_discord = async (req, res) => {
//     if(authed) {
//         try {
//             var service = google.youtube('v3');
//             const response = await service.subscriptions.list({
//                 auth: OAuth2Data,
//                 mine: true,
//                 part: 'snippet,contentDetails'
//             });
//             var subs = response.data.items;
//             var links = [];
//             subs.forEach(function(sub) {
//                 links.push(sub.snippet.resourceId.channelId);
//             });
//             client.channels.cache.get('DISCORD_CHANNEL_ID').send(links.join('\n'));
//             res.send('Posted to Discord');
//         } catch(err) {
//             console.log('The API returned an error: ' + err);
//             res.send('An error occurred');
//         }
//     } else {
//         res.send('Not logged in');
//     }
// };

module.exports = {
    loginyt,
    // Callback,
    // connect_yt_discord
};
