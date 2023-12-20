// routes/auth.js
const express = require('express');
const router = express.Router();
const {  check_mail, login, web} = require('../controllers/authController');
const { about_json } = require('../controllers/dataInfo');

router.post('/check_mail', check_mail);
router.post('/login', login);
router.post('/web', web);
router.post('/json', about_json);

module.exports = router;
