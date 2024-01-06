const express = require("express")
const router = express.Router()
const {  login, callback } = require('../Services/Discord/index');
const GithubService = require('../Services/Github/index');

// Discord API
router.get('/discord/login', login);
router.get('/discord/callback', callback);

// Github API
const githubService = new GithubService();
router.get('/github/login', githubService.login);
module.exports = router
