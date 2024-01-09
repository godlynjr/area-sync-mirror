const { Client, GatewayIntentBits } = require('discord.js');
const config = require("./config.json");
const fetch = require('node-fetch');
const DiscordUser = require('../../models/DiscordUser');
const airtable = require('airtable');

const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
    ]
});

let DiscordIsActive = false;
let AirtableIsActive = false;

client.login(config.BOT_TOKEN);

const login = (req, res) => {
    try {
        const url = 'https://discord.com/api/oauth2/authorize?client_id=1186857028119973959&permissions=8&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fusers%2Fdiscord%2Fcallback&scope=identify+messages.read+bot+guilds.members.read';
        res.redirect(url);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};

const callback = async (req, res) => {
    const code = req.query.code;
    const data = {
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: process.env.DISCORD_REDIRECT_URI,
        code: code,
        scope: 'identify guilds',
    };
    let response = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    let json = await response.json();
    console.log('Access Token: ' + json.access_token);
    console.log('Refresh Token: ' + json.refresh_token);

    // Ajoutez cette partie pour obtenir les informations de l'utilisateur
    let userResponse = await fetch('https://discord.com/api/users/@me', {
        headers: {
            Authorization: `Bearer ${json.access_token}`,
        },
    });
    let userJson = await userResponse.json();
    console.log(userJson); // Affiche les informations de l'utilisateur dans la console

    const user = await DiscordUser.findOne({ discordId: userJson.id });
    if (user) {
        user.accessToken = json.access_token;
        user.refreshToken = json.refresh_token;
        await user.save();
    } else {
        const newUser = new DiscordUser({
            discordId: userJson.id,
            username: userJson.username,
            accessToken: json.access_token,
            refreshToken: json.refresh_token,
        });
        await newUser.save();
    }

    // Renvoie les informations en réponse à la requête de rappel
    res.json({
        accessToken: json.access_token,
        refreshToken: json.refresh_token,
        user: userJson,
    });
};

// ---------------------------------------------------------------------------------------------
// Area One

// Écoutez l'événement 'messageUpdate'
client.on('messageUpdate', (oldMessage, newMessage) => {
    // Vérifiez si le message est épinglé
    if (newMessage.pinned && !oldMessage.pinned) {
        // Déclenchez une action lorsque le message est épinglé
        console.log('Un message a été épinglé :', newMessage.content);

        const eventDetails = {
            // remplissez les détails de l'événement ici
        };
        // appelez votre fonction pour créer un événement Google Calendar ici
        // createGoogleCalendarEvent(eventDetails);

    }
});

async function createGoogleCalendarEvent(eventDetails) {
    const {google} = require('googleapis');
    const calendar = google.calendar({version: 'v3', auth});
    const event = {
        // remplissez les détails de l'événement ici
    };
    try {
        const response = await calendar.events.insert({
            auth: auth,
            calendarId: 'primary',
            resource: event,
        });
        console.log('Event created: %s', response.data.htmlLink);
    } catch (error) {
        console.log('There was an error contacting the Calendar service: ' + error);
    }
}

// ---------------------------------------------------------------------------------------------

// Area Two

console.log('AirtableIsActive:', AirtableIsActive);

const Airtableconnect = async (req, res) => {
    try {
        AirtableIsActive = true;
        res.status(200).json({ message: 'Airtable is connected' });
    } catch (error) {
        console.error('Error in Airtableconnect:', error);
        res.status(500).json({ message: 'Server error', error: error.toString() } , { message: 'Airtable is not connected' });
    }
};

console.log('AirtableIsActive:', AirtableIsActive);

const base = new airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

client.on('guildMemberAdd', member => {
    if (!member.guild.me.hasPermission('VIEW_AUDIT_LOG')) {
        console.log('The bot does not have the permission to view the audit log.');
        return;
    }

    console.log('The bot has the permission to view the audit log.');

    console.log('Airtable is connected');
    if (AirtableIsActive) {
        base('Async').create([
            {
                "fields": {
                    "Username": member.user.username,
                    "Discord ID": member.user.id,
                    "JoinDate": new Date().toISOString()
                }
            }
        ], function (err, records) {
            if (err) {
                console.error('Error adding user to Airtable:', err);
                return;
            }
            console.log('Added user to Airtable:', member.user.username);
        });
    } else {
        console.log('Airtable is not connected');
    }
});

module.exports = { login, callback, Airtableconnect };
