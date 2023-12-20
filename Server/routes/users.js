const express = require("express")
const router = express.Router()
const {  login, callback } = require('../Services/Discord/index');

router.get('/discord/login', login);
router.get('/discord/callback', callback);

module.exports = router
