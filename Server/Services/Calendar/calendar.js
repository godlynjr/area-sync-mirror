// routes/auth.js
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { google } = require('googleapis');
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_SECRET });
const databaseId = process.env.NOTION_DATABASE_ID;

let numbers = 0;
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
    address: 'https://bird-distinct-gator.ngrok-free.app/users/calendar/google-calendar-webhook',
};

const scopes = ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events'];

const token = "";


const googled = async (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
    });
    console.log("fgjh");
    res.redirect(url);
};

async function getUserInfo() {
    const plus = google.plus({ version: 'v1', auth: oauth2Client });
    const userInfo = await plus.people.get({ userId: 'me' });
    console.log('User Info:', userInfo.data);
    return userInfo.data;
}

const callbacks = async (req, res) => {
    const code = req.query.code;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    console.log(tokens);
    // Récupérer les informations du profil utilisateur
    // const userInfo = await getUserInfo();

    res.send({
        msg: "Successfully logged in to Google Calendar",
        // userInfo: userInfo,
    });
};

const callback_calendar = async (req, res) => {
    // calendar.events.watch({
    //     calendarId: calendarId,
    //     requestBody: {
    //         id: channel.id,
    //         type: channel.type,
    //         address: channel.address,
    //     },
    // });

    const response = await calendar.events.list({
        auth: oauth2Client,
        calendarId: 'primary', // 'primary' represents the user's primary calendar
        singleEvents: true,
        orderBy: 'startTime',
      });
  
    const events = response.data.items;
    numbers = events.length;
    return res.status(200).end();
};


const calendarwebhook = async (req, res) => {
    try {
        const response = await calendar.events.list({
            auth: oauth2Client,
            calendarId: 'primary', // 'primary' represents the user's primary calendar
            singleEvents: true,
            orderBy: 'startTime',
          });

        const events = response.data.items;
        console.log(`events lenght  : ${events.length}`);
        console.log(`numbers avant : ${numbers}`);
        if (events.length > numbers) {
            events.sort((a, b) => new Date(b.created) - new Date(a.created));
            // Récupération de l'événement le plus récent
            const dernierEvenement = events[0];
            console.log(`Événement le plus récent :`);
            console.log(`Titre: ${dernierEvenement.summary}`);
            console.log(`Début: ${dernierEvenement.start.dateTime || dernierEvenement.start.date}`);
            console.log(`Fin: ${dernierEvenement.end.dateTime || dernierEvenement.end.date}`);
            console.log(`Date de création: ${dernierEvenement.created}`);

            // Ajoutez ici le code pour créer un événement dans Notion
            // en utilisant les informations reçues de l'événement Google Calendar.
            return res.status(200).end();
        }
        return res.status(200).end();
    } catch (error) {
        console.error(error);
        return res.status(500).end();
    }
};


module.exports = { googled, callbacks, calendarwebhook, callback_calendar};