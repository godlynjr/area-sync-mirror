const express = require("express")
const router = express.Router()

const {  login, callback, Airtableconnect, CalendarConnect,  TodoistConnect } = require('../Services/Discord/index');
const { QuoteLogin, DiscordConnection, QuoteConnect } = require('../Services/Quote/index');
const {  notion_log, notion_callback } = require('../Services/Notion/notion');
const GithubService = require('../Services/Github/index');
const { loginyt, Callback, youtubeXgmail, youtubeXdrive, youtubeXspotify } = require('../Services/Youtube/youtube');
const { ConnectSpotify , SpotifyCallback, createPlaylistWithLikedSongs} = require('../Services/Spotify/index');
const { definePrayerTime, scheduleEmails, sendWeatherEmails } = require("../Services/Date&Time/date&time_service");
const {  googled, callbacks, calendarwebhook, callback_calendar} = require('../Services/Calendar/calendar');
const { twitter_login, getTwitterAccessToken} = require('../Services/Twitter/twitter');

// Discord API
/**
 * @swagger
 * "/discord/login":
 *   get:
 *     description: login to Discord
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/discord/login', login);
/**
 * @swagger
 * "/discord/callback":
 *   get:
 *     description: callback to Discord
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/discord/callback', callback);
/**
 * @swagger
 * "/discord/airtable/connect":
 *   get:
 *     description: Area 1 to Discord
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.post('/discord/airtable/connect', Airtableconnect);

/**
 * @swagger
 * "/discord/calendar/connect":
 *   get:
 *     description: Area 2 to Discord
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.post('/discord/calendar/connect', CalendarConnect);

/**
 * @swagger
 * "/discord/todoist/connect":
 *   get:
 *     description: Area 3 to Discord
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.post('/discord/todoist/connect', TodoistConnect);

// Quote API
/**
 * @swagger
 * "/quote/login":
 *   get:
 *     description: login to quote
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/quote/login', QuoteLogin);

/**
 * @swagger
 * "/quote/discord/connect/:userId":
 *   get:
 *     description: connect to quotezone
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/quote/discord/connect/:userId', DiscordConnection);

/**
 * @swagger
 * "/quote/discord/connect/":
 *   post:
 *     description: quote & Discord area
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.post('/quote/discord/connect', QuoteConnect);

// Calendar API

/**
 * @swagger
 * "/calendar/login":
 *   get:
 *     description: login to quote
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/calendar/login', googled);

/**
 * @swagger
 * "/calendar/callback":
 *   get:
 *     description: callback to Discord
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/calendar/callback', callbacks);

/**
 * @swagger
 * "/calendar/watdch":
 *   get:
 *     description: webhook to Discord
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/calendar/watch', callback_calendar);

/**
 * @swagger
 * "/calendar/google-calendar-webhook":
 *   post:
 *     description: callback to Discord
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.post('/calendar/google-calendar-webhook', calendarwebhook);
// router.post('/calendar/google_birth', calendarwebhook_birthday);

// Youtube API

/**
 * @swagger
 * "/youtube/login":
 *   get:
 *     description: login to youtube
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/youtube/login', loginyt);

/**
 * @swagger
 * "/youtube/callback":
 *   get:
 *     description: callback to youtube
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/youtube/callback', Callback);

/**
 * @swagger
 * "/youtube/gmail/connect":
 *   get:
 *     description: area youtube & gmail
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.post('/youtube/gmail/connect', youtubeXgmail);

/**
 * @swagger
 * "/youtube/drive/connect":
 *   get:
 *     description: area youtube & drive
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.post('/youtube/drive/connect', youtubeXdrive);

/**
 * @swagger
 * "/youtube/spotify/connect":
 *   get:
 *     description: area youtube & spotify
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.post('/youtube/spotify/connect', youtubeXspotify);

// Github API
const githubService = new GithubService();

/**
 * @swagger
 * "/github/login":
 *   get:
 *     description: login to github
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/github/login', githubService.login);

/**
 * @swagger
 * "/github/callback":
 *   get:
 *     description: callback to github
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/github/callback', githubService.handleCallback);

/**
 * @swagger
 * "/github/webhook":
 *   get:
 *     description: webhook to github
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/github/webhook', githubService.webhook);

// Notion API authentication

/**
 * @swagger
 * "/notion/login":
 *   get:
 *     description: notion to login
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/notion/login', notion_log);

/**
 * @swagger
 * "/notion/callback":
 *   get:
 *     description: notion to callback
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/notion/callback', notion_callback);

// SPOTIFY API

/**
 * @swagger
 * "/spotify/login":
 *   get:
 *     description: spotify login
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/spotify/login', ConnectSpotify);

/**
 * @swagger
 * "/spotify/callback":
 *   get:
 *     description: spotify login
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/spotify/callback', SpotifyCallback);

/**
 * @swagger
 * "/spotify/connect":
 *   post:
 *     description: spotify to connect
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.post('/spotify/connect', createPlaylistWithLikedSongs)

// Date&Time

/**
 * @swagger
 * "/datetime/sendprayertime":
 *   get:
 *     description: sendprayertime
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/datetime/sendprayertime', definePrayerTime);
// router.get('/datetime/sendmotivation', scheduleEmails);
// router.get('/datetime/sendweather', sendWeatherEmails);

// Twitter API authentication

/**
 * @swagger
 * "/twitetr/login":
 *   get:
 *     description: login to Twitter
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/twitter/login', twitter_login);

/**
 * @swagger
 * "/twitter/callback":
 *   get:
 *     description: callback to twitter
 *     responses:
 *          200:
 *              description: "Web Credentials match login! Token to be sent."
 *          201:
 *              description: "Web Credentials match register! Token to be sent."
 *          400:
 *              description: "Web Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.get('/twitter/callback', getTwitterAccessToken);
// router.get('/twitter/post', postTweet);

module.exports = router
