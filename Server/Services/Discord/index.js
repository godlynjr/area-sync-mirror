const prefix = '!';
const dayjs  = require('dayjs');
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');
const airtable = require('airtable');
const IService = require('../IService');
const { TodoistApi } = require('@doist/todoist-api-typescript');
const todoist = new TodoistApi(process.env.TODOIST_API_KEY);
const DiscordUser = require('../../models/DiscordUser');
const { Client, GatewayIntentBits } = require('discord.js')
const { googled, oauth2Client, calendar } = require('../Calendar/calendar');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    ]
});

let DiscordIsActive = false;
let CalendarIsActive = false;
let AirtableIsActive = false;
let TodoistIsActive = false;
let redirectURL = '';
let processedMessageIds = new Set();

client.login(process.env.DISCORD_BOT_TOKEN);

const login = (req, res) => {
    try {
        const url = 'https://discord.com/api/oauth2/authorize?client_id=1186857028119973959&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Farea-sync-stagging.onrender.com%2Fusers%2Fdiscord%2Fcallback&scope=identify+bot+guilds.members.read+messages.read';
        redirectURL = req.headers.url;
        DiscordIsActive = true;
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
    DiscordIsActive = true;
    res.redirect(`${redirectURL}?discordId=${userJson.id}`); // Use the redirect URL from the header
};

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// ---------------------------------------------------------------------------------------------
// Area One

const CalendarConnect = async (req, res) => {
    try {
        if (DiscordIsActive) {
            await googled(req, res);
            CalendarIsActive = true;
            res.status(200).json({ message: 'Calendar is connected' });
        }
    } catch (error) {
        console.error('Error in CalendarConnect:', error);
        res.status(500).json({ message: 'Server error', error: error.toString() } , { message: 'Calendar is not connected' });
    }
};

async function checkPinnedMessages(channel) {
    try {
        if (!DiscordIsActive && !CalendarIsActive) {
            console.log('Skipping checkPinnedMessages.');
            return;
        }

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
    try {
      const { summary, description } = eventDetails;
  
      const eventResponse = await calendar.events.insert({
        calendarId: "primary",
        auth: oauth2Client,
        requestBody: {
          summary: summary || "Default Summary", // Use provided summary or a default value
          description: description || "Default Description", // Use provided description or a default value
          start: {
            dateTime: dayjs(new Date()).add(1, 'day').toISOString(), // Use provided start or a default value
            timeZone: "Africa/Abidjan", // Use Africa timezone
          },
          end: {
            dateTime: dayjs(new Date()).add(1, 'day').add(1, 'hour').toISOString(), // Use provided end or a default value
            timeZone: "Africa/Abidjan", // Use Africa timezone
          },
        }
      });
  
      console.log('Google Calendar event created:', eventResponse.data);
    } catch (error) {
      console.error('Error creating Google Calendar event:', error);
    }
}

// ---------------------------------------------------------------------------------------------

// Area Two

const Airtableconnect = async (req, res) => {
    try {
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

    if (AirtableIsActive && DiscordIsActive) {
        const currentDate = new Date();
        const isoDate = currentDate.toISOString().split('T')[0];

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

// ---------------------------------------------------------------------------------------------
// Area three

const TodoistConnect = async (req, res) => {
    try {
        TodoistIsActive = true;
        res.status(200).json({ message: 'Todoist is connected' });
    } catch (error) {
        console.error('Error in TodoistConnect:', error);
        res.status(500).json({ message: 'Server error', error: error.toString() } , { message: 'Todoist is not connected' });
    }
};

// Écoutez l'événement 'messageUpdate'
client.on('messageCreate', async (message) => {

    if (!TodoistIsActive && !DiscordIsActive) {
        console.log('Todoist is not connected');
        return;
    }
    
    if (message.content.startsWith(`${prefix}createtask`)) {
        try {
            const taskContent = message.content.slice(prefix.length + 'createtask'.length).trim();
            console.log('taskContent:', taskContent);

            const projects = await todoist.getProjects();
            const area = projects[3].id;
            console.log('Projects:', projects);
            
            // Créez une tâche Todoist à partir du contenu du message
            const newtask = await todoist.addTask({ content: taskContent, projectId: area, due_lang: 'fr', due_string: 'demain' })
            .catch((error) => console.error('Error creating task:', error));


            // Réagissez au message avec un emoji pour indiquer que la tâche a été créée
            await message.react('✅');
        } catch (error) {
            console.error('Error creating task:', error);
            // Handle the error case here
        }
    }
});

// ---------------------------------------------------------------------------------------------

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

module.exports = { login, callback, Airtableconnect, CalendarConnect, TodoistConnect , client};
