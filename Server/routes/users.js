const express = require("express")
const router = express.Router()
const {  login, callback, Airtableconnect, CalendarConnect } = require('../Services/Discord/index');
const {  notion_log, notion_callback } = require('../Services/Notion/notion');
const GithubService = require('../Services/Github/index');
const {  googled, callbacks, calendarwebhook, callback_calendar } = require('../Services/Calendar/calendar');

// Discord API
router.get('/discord/login', login);
router.get('/discord/callback', callback);
router.post('/discord/airtable/connect', Airtableconnect);
router.post('/discord/calendar/connect', CalendarConnect);

// Calendar API
router.get('/calendar/login', googled);
router.get('/calendar/callback', callbacks);
router.get('/calendar/watch', callback_calendar);
router.post('/calendar/google-calendar-webhook', calendarwebhook);

// Github API
const githubService = new GithubService();
router.get('/github/login', githubService.login);

// Notion API authentication
router.get('/notion/login', notion_log);
router.get('/notion/callback', notion_callback);

module.exports = router
