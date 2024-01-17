let QuoteIsActive = false;
let DiscordIsActive = false;
let TimeIsActive = false;
const axios = require('axios');
const PREFIX = '!';
const jwt = require('jsonwebtoken');
const { client, login } = require('../Discord/index');
const DiscordUser = require('../../models/DiscordUser');
const schedule = require('node-schedule');

const isUserLoggedIn = async (userId) => {
    const user = DiscordUser.findOne({ discordId: userId });
    if (user) {
        return true;
    } else {
        return false;
    }
};

const QuoteLogin = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const isValid = verifyToken(token);
        if (!isValid) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        QuoteIsActive = true;
        res.status(200).json({ message: 'Quote is connected' });
        // const redirectUrl = req.headers.Url; // Récupérer l'URL de redirection de l'en-tête
        // res.redirect(redirectUrl); // Utiliser l'URL de redirection de l'en-tête
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};

const DiscordConnection = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const isValid = verifyToken(token);
        if (!isValid) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const userId = req.params.userId;
        const isLoggedIn = await isUserLoggedIn(userId);
        if (isLoggedIn) {
            DiscordIsActive = true;
            res.status(200).json({ message: 'Discord is connected' });
        } else {
            await login(req, res);
            DiscordIsActive = true;
            res.status(200).json({ message: 'Discord is connected' });
        }
    } catch (error) {
        console.error('Error in DiscordConnection:', error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};

// Area One

client.on('messageCreate', async (message) => {
    if (!QuoteIsActive && !DiscordIsActive) {
        console.log('Quote and Discord are not active');
        return;
    }
    if (!message.author.bot && message.content.startsWith(PREFIX)) {
        const args = message.content.slice(PREFIX.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === 'quote') {
            // Appeler l'API Quotable pour obtenir une citation aléatoire
            try {
                const response = await axios.get('https://api.quotable.io/random');
                const quote = response.data.content; // Assurez-vous que le chemin d'accès à la citation est correct

                // Envoyer la citation sur le canal Discord
                message.channel.send(`Citation du jour : "${quote}"`);
            } catch (error) {
                console.error('Erreur lors de la récupération de la citation :', error);
                message.channel.send('Erreur lors de la récupération de la citation. Veuillez réessayer plus tard.');
            }
        }
    }
});

// Area Two

const QuoteConnect = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const isValid = verifyToken(token);
        if (!isValid) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        
        TimeIsActive = true;
    } catch (error) {
        console.error('Error in DiscordConnection:', error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }

};

// Function to post a motivational quote about working hard in the Discord channel
const postMotivationalQuote = async () => {
    try {
        const response = await axios.get('https://api.quotable.io/random?tags=work');
        const quote = response.data.content;

        // Send the motivational quote to the Discord channel
        const channel = client.channels.cache.get('YOUR_CHANNEL_ID'); // Replace 'YOUR_CHANNEL_ID' with the actual channel ID
        channel.send(`Motivational Quote of the Day (About Working Hard): "${quote}"`);
    } catch (error) {
        console.error('Error while retrieving the quote:', error);
    }
};

// Schedule the job to post the motivational quote every morning at 9:00 AM
schedule.scheduleJob('0 9 * * *', postMotivationalQuote);


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

module.exports = { QuoteLogin, DiscordConnection , QuoteConnect};
