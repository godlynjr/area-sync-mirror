// routes/auth.js
const express = require('express');
const router = express.Router();
const {  check_mail, login, web, authenticateGoogle, authenticateGoogleCallback} = require('../controllers/authController');
const {  about_json } = require('../controllers/dataInfo');
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), authenticateGoogleCallback);
/**
 * @swagger
 * "/check_mail":
 *   post:
 *     description: Check if the email address already exists in the database
 *     responses:
 *          200:
 *              description: "Email already exists; proceed with login authentication"
 *          201:
 *              description: "New email address; proceed with register authentication"
 *          400:
 *              description: "Service is temporarily unavailable."
 */
router.post('/check_mail', check_mail);

/**
 * @swagger
 * "/login":
 *   post:
 *     description: Proceed with login authentication
 *     responses:
 *          200:
 *              description: "Mobile Credentials match! Token to be sent."
 *          400:
 *              description: "Mobile Credentials mismatch !"
 *          404:
 *              description: "User not found"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.post('/login', login);

/**
 * @swagger
 * "/web":
 *   post:
 *     description: Proceed with login & register authentication
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
router.post('/web', web);

/**
 * @swagger
 * "/json":
 *   post:
 *     description: Get the list of services
 *     responses:
 *          200:
 *              description: "Valid JSON response; authorized to send the list"
 *          401:
 *              description: "Unauthorized; cannot sent the list!"
 *          500:
 *              description: "Service is temporarily unavailable."
 */
router.post('/json', about_json);

module.exports = router;
