const axios = require('axios');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
const Translate = require('translate-google');
// const translate = require('google-translate-api');

// Informations de connexion Gmail
const gmailUser = 'rlaabudo2020@gmail.com';
const gmailPassword = 'ijqjydffaxdoyqne';

// Informations OpenWeatherMap
const weatherApiKey = '0a4717fe6b0432061225d0044ae9cc48';
const city = 'cotonou';

// Fonction pour traduire la description de la météo en français
async function translateToFrench(text) {
    try {
        const translation = await Translate(text, { to: 'fr' });
        return translation.text;
    } catch (error) {
        console.error('Erreur de traduction :', error);
        return text; // En cas d'erreur, renvoyer la description d'origine en anglais
    }
}

// Fonction pour envoyer l'e-mail avec la météo
async function sendWeatherEmail() {
    try {
        // Obtenir les données météorologiques
        const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`
        );

        const weatherData = weatherResponse.data;
        const temperature = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;

        // Traduire la description en français
        const translatedDescription = await translateToFrench(weatherDescription);

        // Configurer le transporteur de messagerie
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: gmailUser,
                pass: gmailPassword
            }
        });

        // Envoyer l'e-mail
        const mailOptions = {
            from: gmailUser,
            to: 'areasync7@gmail.com',
            subject: 'Météo du jour',
            text: `La météo du jour à ${city} est ${translatedDescription} avec une température de ${temperature}°C.`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail envoyé :', info.response);
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}

// Planifier l'exécution de la fonction sendWeatherEmail() tous les jours à 8h
cron.schedule('0 8 * * *', () => {
    sendWeatherEmail();
});
// cron.schedule('50 18 * * *', () => {
//     sendWeatherEmail();
//   });