const express = require("express")
const router = express.Router()
const {  login, callback } = require('../Services/Discord/index');
const {  googled, callbacks, calendarwebhook, callback_calendar } = require('../Services/Calendar/calendar');

router.get('/discord/login', login);
router.get('/discord/callback', callback);

router.get('/calendar/login', googled);
router.get('/calendar/callback', callbacks);
router.get('/calendar/watch', callback_calendar);
router.post('/calendar/google-calendar-webhook', calendarwebhook);

module.exports = router
