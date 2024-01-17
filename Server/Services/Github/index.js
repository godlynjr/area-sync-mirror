const IService = require('../IService');
const fetch = require('node-fetch');
require('dotenv').config();
const axios = require('axios');

class GithubService extends IService {
    constructor(_accessToken = '') {
        super();
        this.accessToken = _accessToken;
    }
    
    async login(req, res) {
        try {
            const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URI}&scope=repo`;
            redirectURL = req.headers.url;
            res.send(githubAuthUrl);
            // return githubAuthUrl;            // console.log('Redirect the user to:', githubAuthUrl);
        } catch (error) {
            console.error('Error initiating GitHub login:', error.message);
            res.status(500).json({ message: 'Server error', error: error.toString() });
        }
    }

    async handleCallback(req, res) {
        const code = req.query.code;
        try {
          const response = await axios({
            method: 'post',
            url: 'https://github.com/login/oauth/access_token',
            data: {
              client_id: process.env.GITHUB_CLIENT_ID,
              client_secret: process.env.GITHUB_CLIENT_SECRET,
              code: code,
            },
            headers: {
              accept: 'application/json',
            },
          });
      
          this.accessToken = response.data.access_token;
      
        } catch (error) {
          console.error('Error exchanging code for access token:', error);
          res.status(500).send('Internal Server Error');
        }
    }

    async getPushSendMsg(req, res) {
        try {
            
        } catch (error) {
            console.error('Error :', error);
            res.status(500).send('Internal Server Error');
        }
    }

    async webhook(req, res) {
        try {
            console.log(req);
        } catch (error) {
            console.error('Error :', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = GithubService;
