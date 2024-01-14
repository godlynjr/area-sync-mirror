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
        // console.log(req);
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
            // return accessToken;
            console.log('GitHub access token:', accessToken);
            res.status(200).send("Connected to GitHub");
            // res.send("Acces granted");
            // accessToken = accessToken || '';
            // For example, you can get the user's public information:
            // const userResponse = await axios({
            //     method: 'get',
            //     url: 'https://api.github.com/user',
            //     headers: {
            //         Authorization: `token ${accessToken}`,
            //     },
            // });
    
            // const user = userResponse.data;
            // console.log(user);  // This will log the user's public information to the console
    
            // // You can send a response back to the client with the user's information
            // res.json(user);
        } catch (error) {
            console.error('Error in OAuth callback:', error);
            res.status(500).json({ message: 'Server error', error: error.toString() });
        }
    };
    

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
