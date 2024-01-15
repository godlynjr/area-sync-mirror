const schedule = require('node-schedule');
const nodemailer = require('nodemailer');

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
        "Votre temps est limité, ne le gaspillez pas en vivant la vie de quelqu'un d'autre. - Steve Jobs"
    ];

    // Choisir un message au hasard
    const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

    // Configurer le transporteur
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rlaabudo2020@gmail.com',
            pass: 'ijqjydffaxdoyqne'
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

console.log('Début du script...');

const job = schedule.scheduleJob({ hour: scheduledTime.getHours(), minute: scheduledTime.getMinutes(), second: scheduledTime.getSeconds() }, function () {
    console.log('Planification de l\'envoi quotidien...');
    sendEmail();

    // Terminer le processus Node.js après avoir exécuté la tâche planifiée
    // process.exit();
});

console.log('Fin du script...');

// Afficher un message lors du démarrage pour indiquer que la planification a été configurée
console.log('Planification de l\'envoi quotidien à ' + scheduledTime.toLocaleTimeString() + ' configurée.');


// function scheduleEmail(hour, minute) {
//     const now = new Date();
//     const targetTime = new Date(
//         now.getFullYear(),
//         now.getMonth(),
//         now.getDate(),
//         hour,
//         minute,
//         0
//     );
//     let delay = targetTime.getTime() - now.getTime();
//     if (delay < 0) {
//         delay += 24 * 60 * 60 * 1000;
//     }
//     console.log("L'e-mail sera envoyé à " + hour + ":" + minute);
//     setTimeout(function () {
//         sendEmail();
//         scheduleEmail(hour, minute);
//     }, delay);
// }

// scheduleEmail(21, 24);


// {
//   "name": "server",
//   "version": "0.0.0",
//   "private": true,
//   "scripts": {
//     "start": "node ./bin/www"
//   },
//   "dependencies": {
//     "@doist/todoist-api-typescript": "^3.0.1",
//     "@google-cloud/local-auth": "^2.1.0",
//     "@notionhq/client": "^2.2.14",
//     "airtable": "^0.12.2",
//     "axios": "^1.6.5",
//     "bcrypt": "^5.1.1",
//     "cookie-parser": "~1.4.4",
//     "cors": "^2.8.5",
//     "dayjs": "^1.11.10",
//     "debug": "~2.6.9",
//     "discord.js": "^14.14.1",
//     "dotenv": "^16.3.1",
//     "express": "^4.18.2",
//     "express-session": "^1.17.3",
//     "faker": "^5.5.3",
//     "googleapis": "^129.0.0",
//     "http-errors": "~1.6.3",
//     "https": "^1.0.0",
//     "jade": "^0.29.0",
//     "jsonwebtoken": "^9.0.2",
//     "mongoose": "^8.0.3",
//     "morgan": "~1.9.1",
//     "node-todoist": "^0.3.2",
//     "passport": "^0.7.0",
//     "passport-google-oauth20": "^2.0.0",
//     "pug": "^3.0.2",
//     "querystring": "^0.2.1",
//     "spotify-web-api-node": "^5.0.2",
//     "swagger-jsdoc": "^6.2.8",
//     "swagger-ui-express": "^5.0.0",
//     "todoist-js": "^0.3.1",
//     "uuid": "^9.0.1"
//   },
//   "devDependencies": {
//     "nodemon": "^3.0.2"
//   }
// }