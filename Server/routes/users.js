const express = require("express")
const router = express.Router()
const {  login, callback, Airtableconnect, CalendarConnect,  TodoistConnect } = require('../Services/Discord/index');
const { QuoteLogin, DiscordConnection } = require('../Services/Quote/index');
const {  notion_log, notion_callback } = require('../Services/Notion/notion');
const GithubService = require('../Services/Github/index');
const {  googled, callbacks, calendarwebhook, callback_calendar } = require('../Services/Calendar/calendar');
const { loginyt} = require('../Services/Youtube/youtube');
const { definePrayerTime, scheduleEmail, sendWeatherEmail } = require("../Services/Date&Time/date&time_service");

// Discord API
router.get('/discord/login', login);
router.get('/discord/callback', callback);
router.post('/discord/airtable/connect', Airtableconnect);
router.post('/discord/calendar/connect', CalendarConnect);
router.post('/discord/todoist/connect', TodoistConnect);

// Quote API
router.get('/quote/login', QuoteLogin);
router.get('/quote/discord/connect/:userId', DiscordConnection);

// Calendar API
router.get('/calendar/login', googled);
router.get('/calendar/callback', callbacks);
router.get('/calendar/watch', callback_calendar);
router.post('/calendar/google-calendar-webhook', calendarwebhook);

// Youtube API
router.get('/youtube/login', loginyt);
// router.get('/youtube/callback', Callback);
// router.post('/youtube/discord/connect', connect_yt_discord);

// Github API
const githubService = new GithubService();
router.get('/github/login', githubService.login);
router.get('/github/callback', githubService.handleCallback);

// Notion API authentication
router.get('/notion/login', notion_log);
router.get('/notion/callback', notion_callback);

// Date&Time
// router.get('/datetime/sendmotivation', scheduleEmail);
// router.get('/datetime/sendweather', sendWeatherEmail);
// router.get('/datetime/sendprayertime', definePrayerTime);

module.exports = router
