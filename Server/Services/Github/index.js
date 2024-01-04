const IService = require('../IService');
const fetch = require('node-fetch');
const config = require('./config.json');

class GithubService extends IService {
    constructor() {
        super();
        this.accessToken = null;
    }
    
    async login(req, res) {
        try {
            const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${config.GITHUB_CLIENT_ID}&redirect_uri=${config.GITHUB_REDIRECT_URI}&scope=repo`;
            res.redirect(githubAuthUrl);
            console.log('Redirect the user to:', githubAuthUrl);
        } catch (error) {
            console.error('Error initiating GitHub login:', error.message);
            throw error;
        }
    }
    
    async handleCallback(code) {
        try {
            const data = {
                client_id: config.GITHUB_CLIENT_ID,
                client_secret: config.GITHUB_CLIENT_SECRET,
                code: code,
                redirect_uri: config.GITHUB_REDIRECT_URI,
            };

            const response = await fetch('https://github.com/login/oauth/access_token', {
                method: 'POST',
                body: new URLSearchParams(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            
            const json = await response.json();
            this.accessToken = json.access_token;
    
            console.log('Access Token:', this.accessToken);
        } catch (error) {
            console.error('Error handling GitHub callback:', error.message);
            throw error;
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

    async disconnect() {
        // Your implementation to disconnect from GitHub
        console.log('Disconnecting from GitHub...');
        // Add your GitHub disconnection logic here
    }

    async sendMessage(message) {
        // Implement your logic to send a message on GitHub
        console.log(`Sending message to GitHub: ${message}`);
        // Add your GitHub message sending logic here
    }

    async createNotification(message) {
        // Your implementation for GitHub-specific logic
        console.log(`Creating notification in GitHub: ${message}`);
    }

    // Additional methods specific to GitHub actions
    async createPageInNotion(pageDetails) {
        // Implement your logic to create a page in Notion based on GitHub action
        console.log('Creating a Notion page for GitHub action:', pageDetails);
    }

    async closeGithubIssue(issueDetails) {
        // Implement your logic to close a GitHub issue
        console.log('Closing GitHub issue:', issueDetails);
    }

    async updateGithubIssue(issueDetails) {
        // Implement your logic to update a GitHub issue
        console.log('Updating GitHub issue:', issueDetails);
    }

    // Add more GitHub-specific methods as needed
}

module.exports = GithubService;
