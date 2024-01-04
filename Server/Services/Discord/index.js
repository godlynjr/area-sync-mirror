const { Client, GatewayIntentBits } = require('discord.js');
const config = require("./config.json");
const fetch = require('node-fetch');
const DiscordUser = require('../../models/DiscordUser');

const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
    ]
});
client.login(config.BOT_TOKEN);

const login = (req, res) => {
    try {
        const url = 'https://discord.com/api/oauth2/authorize?client_id=1186857028119973959&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fusers%2Fdiscord%2Fcallback&scope=identify';
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

module.exports = { login, callback };
