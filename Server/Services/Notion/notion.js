const express = require('express');
const router = express.Router();
const { google } = require('googleapis');
const axios = require('axios');
const { Client } = require('@notionhq/client');
const querystring = require('querystring');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const app = express();

const notion = new Client({
    auth: null,
});
 
const clientId = process.env.NOTION_ID;
const clientSecret = process.env.NOTION_SECRET;
const redirectUri = 'http://localhost:8080/users/notion/callback';
const state = uuidv4();

app.get('/auth', (req, res) => {
    const authUrl = `https://api.notion.com/v1/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
    res.redirect(authUrl);
});


app.get('/auth/callback', async (req, res) => {
  const authCode = req.query.code;

  // Échange le code d'autorisation contre un jeton d'accès en faisant une requête POST à l'API Notion
  try {
    const response = await axios.post('https://api.notion.com/v1/oauth/token', {
      grant_type: 'authorization_code',
      code: authCode,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
    });

    const accessToken = response.data.access_token;

    // Utilise le jeton d'accès pour accéder aux ressources de l'utilisateur autorisé
    // Tu peux effectuer des requêtes vers l'API Notion en incluant le jeton d'accès dans les en-têtes

    res.send('Authentification réussie !');

  } catch (error) {
    console.error('Erreur lors de l\'échange du code d\'autorisation contre un jeton d\'accès :', error.message);
    res.status(500).send('Erreur d\'authentification');
  }
});


module.exports = { notion_log, notion_callback};
