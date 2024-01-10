const nodemailer = require('nodemailer');

var scheduledHour = 21; // Par exemple, 9 heures (3 PM)
var scheduledMinutes = 15; // Par exemple, 30 minutes
var scheduledSeconds = 0; // Par exemple, 28 seconde

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

sendEmail();

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
