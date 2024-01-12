const express = require("express")
const router = express.Router()
const {  login, callback, Airtableconnect } = require('../Services/Discord/index');
const GithubService = require('../Services/Github/index');
const {  googled, callbacks, calendarwebhook, callback_calendar } = require('../Services/Calendar/calendar');
const { loginyt} = require('../Services/Youtube/youtube');

// Discord API
router.get('/discord/login', login);
router.get('/discord/callback', callback);
router.post('/discord/airtable/connect', Airtableconnect);

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
module.exports = router
