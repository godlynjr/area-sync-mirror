// routes/auth.js
const express = require('express');
const router = express.Router();
const {  check_mail, login, web, authenticateGoogle, authenticateGoogleCallback} = require('../controllers/authController');
// const {  about_json } = require('../controllers/dataInfo');
const passport = require('passport');
const { v4: uuidv4 } = require('uuid');
const { google } = require('googleapis');
const dayjs  = require('dayjs')

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_SECRET });
const databaseId = process.env.NOTION_DATABASE_ID;

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oauth2Client.on('tokens', (tokens) => {
    if (tokens.refresh_token) {
      // store the refresh_token in my database!
        oauth2Client.setCredentials({
            refresh_token: tokens.refresh_token
        });
    }
    oauth2Client.setCredentials(tokens);
  });

const calendar = google.calendar({
    version: "v3",
    auth: oauth2Client,
});
const calendarId = 'primary';

const channel = {
    id: uuidv4(),
    type: 'web_hook',
    address: 'https://bird-distinct-gator.ngrok-free.app/auth/google-calendar-webhook',
};
const scopes = ['https://www.googleapis.com/auth/calendar'];
const token = "";
router.get('/google', (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
    });
    res.redirect(url);
});

router.get('/google/callback', async (req, res) => {
    const code = req.query.code;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);


    calendar.events.watch({
        calendarId: calendarId,
        requestBody: {
            id: channel.id,
            type: channel.type,
            address: channel.address,
        },
    });

    res.send({
        msg: "Successfully loggeed in to Google Calendar",
    }); 
});

router.post('/google-calendar-webhook', async (req, res) => {
    try {
        const eventId = JSON.stringify(req.headers);
        // Traitez les changements (nouvel événement, mise à jour, suppression, etc.)
        // Vous pouvez extraire les détails de l'événement de `changes`
        console.log('Google Calendar event change received:', eventId);
        const eventDetails = await calendar.events.get({
            calendarId: 'primary',
            eventId: eventId,
        });
        console.log('Event details:', eventDetails.data);
        // Ajoutez ici le code pour créer un événement dans Notion
        // en utilisant les informations reçues de l'événement Google Calendar.
        return res.status(200).end();
    } catch (error) {
        console.error(error);
        return res.status(500).end();
    }
});

/**
 * @swagger
 * "/check_mail":
 *   post:
 *     description: Check if the email address already exists in the database
 *     responses:
 *          200:
 *              description: "Email already exists; proceed with login authentication"
 *          201:
 *              description: "New email address; proceed with register authentication"
 *          400:
 *              description: "Service is temporarily unavailable."
 */
router.post('/check_mail', check_mail);

/**
 * @swagger
 * "/login":
 *   post:
 *     description: Proceed with login authentication
 *     responses:
 *          200:
 *              description: "Mobile Credentials match! Token to be sent."
 *          400:
 *              description: "Mobile Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.post('/login', login);

/**
 * @swagger
 * "/web":
 *   post:
 *     description: Proceed with login & register authentication
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.post('/web', web);

/**
 * @swagger
 * "/json":
 *   post:
 *     description: Get the list of services
 *     responses:
 *          200:
 *              description: "Valid JSON response; authorized to send the list"
 *          401:
 *              description: "Unauthorized; cannot sent the list!"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
// router.post('/json', about_json);

module.exports = router;
