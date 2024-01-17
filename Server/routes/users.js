const express = require("express")
const router = express.Router()
const {  login, callback, Airtableconnect, CalendarConnect,  TodoistConnect } = require('../Services/Discord/index');
const {  notion_log, notion_callback } = require('../Services/Notion/notion');
const GithubService = require('../Services/Github/index');
const {  googled, callbacks, calendarwebhook, callback_calendar} = require('../Services/Calendar/calendar');
const { loginyt} = require('../Services/Youtube/youtube');
const { twitter_login, getTwitterAccessToken} = require('../Services/Twitter/twitter');
const { trello_login, trello_callback} = require('../Services/Trello/trello');

// Discord API
router.get('/discord/login', login);
router.get('/discord/callback', callback);
router.post('/discord/airtable/connect', Airtableconnect);
router.post('/discord/calendar/connect', CalendarConnect);
router.post('/discord/todoist/connect', TodoistConnect);

// Calendar API
router.get('/calendar/login', googled);
router.get('/calendar/callback', callbacks);
router.get('/calendar/watch', callback_calendar);
router.post('/calendar/google-calendar-webhook', calendarwebhook);
// router.post('/calendar/google_birth', calendarwebhook_birthday);

// Youtube API
router.get('/youtube/login', loginyt);
// router.get('/youtube/callback', Callback);
// router.post('/youtube/discord/connect', connect_yt_discord);

// Github API
const githubService = new GithubService();
router.get('/github/login', githubService.login);

// Notion API authentication
router.get('/notion/login', notion_log);
router.get('/notion/callback', notion_callback);


// Trello API authentication
router.get('/trello/login', trello_login);
router.get('/trello/callback', trello_callback);


// Twitter API authentication
router.get('/twitter/login', twitter_login);
router.get('/twitter/callback', getTwitterAccessToken);
// router.get('/twitter/post', postTweet);


module.exports = router
