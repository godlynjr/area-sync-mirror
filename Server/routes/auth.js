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
        const eventId = req.headers["x-goog-resource-id"];
    
        // Traitez les changements (nouvel événement, mise à jour, suppression, etc.)
        // Vous pouvez extraire les détails de l'événement de `changes`
        console.log('Google Calendar event change received:', eventId);
        
        const eventDetails = await calendar.events.get({
            calendarId: 'primary',
            eventId: eventId, // replace with actual event ID from notification
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

router.get('/create_events', async (req, res) => {
    try {
        const eventResponse = await calendar.events.insert({
            calendarId: "primary",
            auth: oauth2Client,
            requestBody: {
                summary: "Newwwwwwwwwwww",
                description: "Important sur les services ...",
                start: {
                    dateTime: dayjs(new Date()).add(1, 'day').toISOString(),
                    timeZone: "Asia/Kolkata",
                },
                end: {
                    dateTime: dayjs(new Date()).add(1, 'day').add(1, 'hour').toISOString(),
                    timeZone: "Asia/Kolkata",
                },
            }
        });

        const eventId = eventResponse.data.id;
        const eventTitle = eventResponse.data.summary;

        // Créer une page Notion avec le titre de l'événement
        const notionResponse = await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                title: { type: 'title', title: [{ text: { content: eventTitle } }] },
            },
        });

        const notionPageId = notionResponse.id; // Récupérer l'ID de la page Notion
        console.log('Notion page created with ID: %s', notionPageId);

        // Ajouter l'ID de la page Notion à la propriété de l'événement sur Google Calendar
        await calendar.events.patch({
            calendarId: "primary",
            eventId: eventId,
            auth: oauth2Client,
            requestBody: {
                extendedProperties: {
                    private: {
                        notionPageId: notionPageId,
                    },
                },
            },
        });

        res.send({ msg: 'Event and Notion page created successfully', eventId });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send({ msg: 'Error creating event or Notion page' });
    }
});


router.get('/delete_event/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;

        // Récupérer l'ID de la page Notion associée à cet événement
        const eventDetails = await calendar.events.get({
            calendarId: "primary",
            eventId: eventId,
            auth: oauth2Client,
        });

        const notionPageId = eventDetails.data.extendedProperties?.private?.notionPageId;

        // Supprimer l'événement de Google Calendar
        await calendar.events.delete({
            calendarId: "primary",
            eventId: eventId,
            auth: oauth2Client,
        });

        // Supprimer la page Notion correspondante
        if (notionPageId) {
            await notion.pages.update({
                page_id: notionPageId,
                archived: true, // Mettez à jour le statut de la page pour l'archiver
            });
        }

        res.send({ msg: 'Event and Notion page deleted successfully' });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send({ msg: 'Error deleting event or Notion page' });
    }
});



router.get('/update_event/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;

        // Récupérer l'ID de la page Notion associée à cet événement
        const eventDetails = await calendar.events.get({
            calendarId: "primary",
            eventId: eventId,
            auth: oauth2Client,
        });

        const notionPageId = eventDetails.data.extendedProperties?.private?.notionPageId;

        // Mettre à jour l'événement dans Google Calendar
        const updatedEvent = await calendar.events.patch({
            calendarId: "primary",
            eventId: eventId,
            auth: oauth2Client,
            requestBody: {
                summary: "Updated event title",
                description: "Updated event description...",
            },
        });

        // Mettre à jour la page Notion correspondante
        if (notionPageId) {
            const updatedEventTitle = updatedEvent.data.summary;
            await notion.pages.update({
                page_id: notionPageId,
                properties: {
                    title: { type: 'title', title: [{ text: { content: updatedEventTitle } }] },
                    // Ajoutez d'autres propriétés Notion en fonction de vos besoins
                },
            });
        }

        res.send({ msg: 'Event and Notion page updated successfully' });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send({ msg: 'Error updating event or Notion page' });
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
