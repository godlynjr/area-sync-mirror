// AREA 1
// AREA 1
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');
const express = require('express');
const router = express.Router();

const heuresPriere = [
    { heure: '2:40', message: 'Fajr: Bismillah, que cette journée soit bénie. Que votre journée soit remplie de paix et de réussite.' },
    { heure: '2:35', message: 'Dhuhr: Prenez une pause dans votre journée bien remplie pour vous connecter avec Allah. Que votre journée soit remplie de bénédictions.' },
    { heure: '2:30', message: 'Asr: Prenez un moment pour vous recentrer et vous rappeler de la présence d\'Allah dans votre vie. Que votre après-midi soit paisible.' },
    { heure: '15:54', message: 'Maghrib: Bismillah, que la fin de cette journée soit remplie de gratitude. Que votre soirée soit bénie et apaisante.' },
    { heure: '2:15', message: 'Isha: Terminez votre journée en vous tournant vers Allah avec amour et dévotion. Que votre nuit soit paisible et remplie de bénédictions.' }
];

// Configuration du transporteur d'e-mails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rlaabudo2020@gmail.com',
        pass: 'ngzeixzrrzeuedru'
    }
});

// Fonction pour envoyer un e-mail avec le message spécifié
function sendEmail(message) {
    const mailOptions = {
        from: 'rlaabudo2020@gmail.com',
        to: 'areasync7@gmail.com',
        subject: 'Message Motivant de la journée',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        } else {
            console.log('E-mail envoyé avec succès. ID du message:', info.messageId);
        }
    });

}

const definePrayerTime = () => {
    heuresPriere.forEach(priere => {
        const regleEnvoi = new schedule.RecurrenceRule();
        regleEnvoi.hour = parseInt(priere.heure.split(':')[0]);
        regleEnvoi.minute = parseInt(priere.heure.split(':')[1]);

        const scheduleEnvoi = schedule.scheduleJob(regleEnvoi, () => {
            sendEmail(priere.message);
            console.log('Mail envoyé');
        });
    });
}
// definePrayerTime();
// const definePrayerTime = () => {
//     heuresPriere.forEach(priere => {
//         const regleEnvoi = new schedule.RecurrenceRule();
//         regleEnvoi.hour = parseInt(priere.heure.split(':')[0]);
//         regleEnvoi.minute = parseInt(priere.heure.split(':')[1]);

//         const scheduleEnvoi = schedule.scheduleJob(regleEnvoi, () => {
//             sendEmail(priere.message);
//         });
//     });
// }
// const notion_callback = async (req, res) => {

// async function definePrayerTime() {
//     return new Promise((resolve, reject) => {
//         heuresPriere.forEach(priere => {
//             const regleEnvoi = new schedule.RecurrenceRule();
//             regleEnvoi.hour = parseInt(priere.heure.split(':')[0]);
//             regleEnvoi.minute = parseInt(priere.heure.split(':')[1]);

//             const scheduleEnvoi = schedule.scheduleJob(regleEnvoi, () => {
//                 sendEmail(priere.message);
//             });

//             if (scheduleEnvoi) {
//                 resolve(); // Résoudre la promesse lorsque toutes les tâches sont planifiées avec succès
//             } else {
//                 reject(new Error('Erreur lors de la planification des tâches.')); // Rejeter la promesse en cas d'erreur de planification des tâches
//             }
//         });
//     });
// }

// // AREA 2

const scheduledTime = new Date();
scheduledTime.setHours(2); // Heure (24 heures format)
scheduledTime.setMinutes(28); // Minutes
scheduledTime.setSeconds(0); // Secondes

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
console.log("Nous sommes le " + day + "/" + month + "/" + year + " et il est " + hours + " heure " + minutes + " minutes " + seconds + " secondes");

// Fonction pour envoyer l'e-mail
function sendEmail() {
    // Messages motivants
    const motivationalMessages = [
        "Chaque jour est une nouvelle chance de changer votre vie.",
        "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte. - Winston Churchill",
        "Le seul moyen de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs",
        "Chaque petite étape vous rapproche d'un grand succès.",
        "La confiance en soi est le premier secret du succès.",
        "Ne regardez pas en arrière, vous n'allez pas dans cette direction.",
        "Le pessimiste se plaint du vent, l'optimiste espère qu'il changera, le réaliste ajuste les voiles. - William Arthur Ward",
        "L'échec est le condiment qui donne sa saveur au succès. - Truman Capote",
        "Chaque progrès, même le plus petit, est une victoire.",
        "Votre temps est limité, ne le gaspillez pas en vivant la vie de quelqu'un d'autre. - Steve Jobs",
        "Les obstacles sont ces choses que vous apercevez lorsque vous détournez votre regard de vos objectifs. - Henry Ford",
        "La réussite n'est pas la clé du bonheur. Le bonheur est la clé de la réussite. Si vous aimez ce que vous faites, vous réussirez. - Albert Schweitzer",
        "N'ayez pas peur de la perfection, vous n'y arriverez jamais. Mais visez la perfection et vous atteindrez l'excellence. - Vince Lombardi",
        "Chaque échec est une étape vers le succès. - Anonymous",
        "Votre travail va occuper une grande partie de votre vie, la seule façon d'être vraiment satisfait est de faire ce que vous croyez être un excellent travail. Et la seule façon de faire un excellent travail est d'aimer ce que vous faites. - Steve Jobs",
        "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous serez heureux. - Albert Schweitzer",
        "Chaque nouvelle journée est une autre chance de changer votre vie. - Unknown",
        "La volonté de gagner, le désir de réussir, le plaisir de travailler dur pour atteindre ses objectifs : voilà les clés du succès. - Theodore Roosevelt",
        "Le succès est la somme de petits efforts répétés jour après jour. - Robert Collier",
        "Soyez tellement occupé à vous améliorer que vous n'avez pas le temps de critiquer les autres. - Chetan Bhagat",
        "Le secret de changer votre avenir réside dans vos habitudes quotidiennes. - John C. Maxwell",
        "Le succès ne consiste pas à ne jamais échouer, mais à ne jamais abandonner. - Herman Melville"
    ];

    // Choisir un message au hasard
    const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

    // Configurer le transporteur
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rlaabudo2020@gmail.com',
            pass: 'ngzeixzrrzeuedru'
        }
    });

    // Définir les détails de l'e-mail
    const mailOptions = {
        from: 'rlaabudo2020@gmail.com',
        to: 'areasync7@gmail.com',
        subject: 'Message Motivant de la journée',
        text: randomMessage
    };

    // Envoyer l'erandomMessage
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
            console.log('Échec de l\'envoi de l\'e-mail');
        } else {
            console.log('Contenu du courriel : ' + randomMessage);
            console.log('------------------------------');
        }
    });
};

// console.log('Début du script...');

const job = schedule.scheduleJob({ hour: scheduledTime.getHours(), minute: scheduledTime.getMinutes(), second: scheduledTime.getSeconds() }, function () {
    console.log('Planification de l\'envoi quotidien...');
    sendEmail();

    // Terminer le processus Node.js après avoir exécuté la tâche planifiée
    // process.exit();
});

// console.log('Fin du script...');

// Afficher un message lors du démarrage pour indiquer que la planification a été configurée
// console.log('Planification de l\'envoi quotidien à ' + scheduledTime.toLocaleTimeString() + ' configurée.');


function scheduleEmail(hour, minute) {
    const now = new Date();
    const targetTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hour,
        minute,
        0
    );
    let delay = targetTime.getTime() - now.getTime();
    if (delay < 0) {
        delay += 24 * 60 * 60 * 1000;
    }
    console.log("L'e-mail sera envoyé à " + hour + ":" + minute);
    setTimeout(function () {
        sendEmail();
        scheduleEmail(hour, minute);
    }, delay);
}

scheduleEmail(15, 53);


// // AREA 3 

const axios = require('axios');
const cron = require('node-cron');
const Translate = require('translate-google');
// const translate = require('google-translate-api');

// const translate = require('google-translate-api');

// Informations de connexion Gmail
const gmailUser = 'rlaabudo2020@gmail.com';
const gmailPassword = 'ngzeixzrrzeuedru';

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
// cron.schedule('0 8 * * *', () => {
//     sendWeatherEmail();
// });
cron.schedule('52 15 * * *', () => {
    sendWeatherEmail();
});

// module.exports = { sendWeatherEmail, scheduleEmail, definePrayerTime };

