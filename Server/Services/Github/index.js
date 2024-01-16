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
            // res.redirect(githubAuthUrl);
            return githubAuthUrl;            // console.log('Redirect the user to:', githubAuthUrl);
        } catch (error) {
            console.error('Error initiating GitHub login:', error.message);
            throw error;
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
      
          const accessToken = response.data.access_token;
      
          const validateResponse = await axios.get('https://api.github.com/user', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
      
          if (validateResponse.data) {
            console.log('GitHub access token:', accessToken);
            res.status(200).json({
              access_token: accessToken,
              token_type: response.data.token_type,
              scope: response.data.scope,
              user: validateResponse.data,
            });
          } else {
            console.error('Invalid GitHub access token');
            res.status(401).send('Unauthorized');
          }
        } catch (error) {
          console.error('Error exchanging code for access token:', error);
          res.status(500).send('Internal Server Error');
        }
      }
      

    async connect() {
        try {
            if (!this.accessToken) {
                throw new Error('GitHub access token not available. Please log in first.');
            }
        
            // Additional logic to verify the access token or perform other setup
            console.log('Connected to GitHub.');
        } catch (error) {
            console.error('Error connecting to GitHub:', error.message);
            throw error;
        }
    }

}

module.exports = GithubService;
