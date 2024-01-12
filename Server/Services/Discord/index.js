const { Client, GatewayIntentBits } = require('discord.js')
const config = require("./config.json");
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');
const DiscordUser = require('../../models/DiscordUser');
const airtable = require('airtable');
const { googled } = require('../Calendar/calendar');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    ]
});

let DiscordIsActive = false;
let AirtableIsActive = false;
let processedMessageIds = new Set();

client.login(config.BOT_TOKEN);

const login = (req, res) => {
    try {
        const url = 'https://discord.com/api/oauth2/authorize?client_id=1186857028119973959&permissions=8&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fusers%2Fdiscord%2Fcallback&scope=identify+messages.read+bot+guilds.members.read';
        res.send(url);
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
    res.redirect('http://localhost:8081/Discord');
};

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// ---------------------------------------------------------------------------------------------
// Area One

const CalendarConnect = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const isValid = verifyToken(token);
        if (!isValid) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        await googled(req, res);
        DiscordIsActive = true;
        // res.status(200).json({ message: 'Calendar is connected' });
    } catch (error) {
        console.error('Error in CalendarConnect:', error);
        res.status(500).json({ message: 'Server error', error: error.toString() } , { message: 'Calendar is not connected' });
    }
};

// Écoutez l'événement 'messageUpdate'
client.on('messageCreate', async (message) => {
    console.log('Message :', message);
    // Fetch all pinned messages in the channel
    let pinnedMessages = await message.channel.messages.fetchPinned();
    // Check if the message is in the collection of pinned messages
    if (pinnedMessages.has(message.id)) {
        console.log('Un message a été épinglé :', message.content);

        // Effectuez des actions liées à chaque message épinglé ici
        const eventDetails = {
            // remplissez les détails de l'événement ici
        };
        // appelez votre fonction pour créer un événement Google Calendar ici
        // createGoogleCalendarEvent(eventDetails);
    }
});

async function checkPinnedMessages(channel) {
    try {
        const pinnedMessages = await channel.messages.fetchPinned();

        // Parcourez les messages épinglés et effectuez des actions si nécessaire
        pinnedMessages.forEach(async (message) => {
            if (!processedMessageIds.has(message.id)) {
                console.log('Nouveau message épinglé :', message.content);

                // Créez un événement Google Calendar pour le nouveau message épinglé
                const eventDetails = {
                    // Utilisez les détails du message pour remplir les détails de l'événement
                    'summary': `Message épinglé : ${message.content}`,
                    'description': `Un nouveau message a été épinglé dans le canal ${channel.name} par ${message.author.username}.`,
                    // Ajoutez d'autres détails de l'événement ici
                };
                await createGoogleCalendarEvent(eventDetails);

                // Ajoutez l'ID du message à la liste des messages traités
                processedMessageIds.add(message.id);
            }
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des messages épinglés :', error);
    }
}

// Vérifiez périodiquement les messages épinglés
setInterval(() => {
    const channel = client.channels.cache.get('1194380647729463336');
    if (channel) {
        checkPinnedMessages(channel);
    }
}, 30000);

async function createGoogleCalendarEvent(eventDetails) {
    
}

// ---------------------------------------------------------------------------------------------

// Area Two

const Airtableconnect = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log('Token:', token);
        const isValid = verifyToken(token);
        if (!isValid) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        AirtableIsActive = true;
        res.status(200).json({ message: 'Airtable is connected' });
    } catch (error) {
        console.error('Error in Airtableconnect:', error);
        res.status(500).json({ message: 'Server error', error: error.toString() } , { message: 'Airtable is not connected' });
    }
};

const base = new airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

client.on('guildMemberAdd', member => {
    console.log('The bot has the permission to view the audit log.');

    if (AirtableIsActive) {
        const currentDate = new Date();
        const isoDate = currentDate.toISOString();

        const record = {
            "fields": {
                "Username": member.user.username,
                "Discord ID": member.user.id,
                "JoinDate": isoDate
            }
        };

        base('Async').create([record], function (err, records) {
            if (err) {
                console.error('Error adding user to Airtable:', err);
                console.error('Record that caused the error:', record);
                return;
            }
            console.log('Added user to Airtable:', member.user.username);
            console.log('Airtable response:', records);
        });
    } else {
        console.log('Airtable is not connected');
    }
});

const verifyToken = async (token) => {
    // Function to check if the token is valid
    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        return !!verified;
    } catch (error) {
        console.error(error);
        return false;
    }
};

module.exports = { login, callback, Airtableconnect, CalendarConnect };
