// routes/auth.js
const express = require('express');
const router = express.Router();
const {  check_mail, login, web, authenticateGoogle, authenticateGoogleCallback} = require('../controllers/authController');
const { about_json } = require('../controllers/dataInfo');
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), authenticateGoogleCallback);
router.post('/check_mail', check_mail);
router.post('/login', login);
router.post('/web', web);
router.post('/json', about_json);

module.exports = router;
