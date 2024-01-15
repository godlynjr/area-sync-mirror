const express = require('express');
const axios = require('axios');
const fetch = require('node-fetch');
require('dotenv').config();
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_SECRET });

const clientId = process.env.NOTION_ID;
const clientSecret = process.env.NOTION_SECRET;
const redirectUri = 'http://localhost:8080/users/notion/callback';
const database_id = process.env.NOTION_DATABASE_ID;

const notion_log = async (req, res) => {
    const authUrl = `https://api.notion.com/v1/oauth/authorize?client_id=302fe87e-a378-4cdd-a3e7-f583a514257c&response_type=code&owner=user&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fusers%2Fnotion%2Fcallback`;
    res.redirect(authUrl);
};


const createNotionPage = async (title, content, accessToken) => {
    try {
      const response = await notion.pages.create({
        parent: {
          database_id: database_id,
        },
        properties: {
          title: {
            title: [
              {
                type: 'text',
                text: {
                  content: title,
                },
              },
            ],
          },
        },
        children: [
          {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: content,
                  },
                },
              ],
            },
          },
        ],
      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Notion-Version': '2023-08-01', // Mettez à jour avec la version la plus récente de l'API Notion
        },
    });
    console.log('Page Notion créée :', response);
    return response;
} catch (error) {
    console.error('Erreur lors de la création de la page Notion :', error);
    throw error;
}
};



const notion_callback = async (req, res) => {
  const authCode = req.query.code;

  try {
    const options = {
        method: 'POST',
        url: 'https://api.notion.com/v1/oauth/token',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        auth: {
          username: clientId,
          password: clientSecret
        },
        data: {code: authCode, grant_type: 'authorization_code', redirect_uri: redirectUri, client_id:clientId, client_secret:clientSecret}
    };
    const response = await axios.request(options);
    console.log(response.data.access_token);
    const accessToken = response.data.access_token;
    const workid = response.data.workspace_id;
    // const database_id = process.env.NOTION_DATABASE_ID;

    await createNotionPage('ARE', 'htgfjhgjh', accessToken);

    res.send('Authentification réussie !');
  } catch (error) {
    console.error('Erreur lors de l\'échange du code d\'autorisation contre un jeton d\'accès :', error.message);
    res.status(500).send('Erreur d\'authentification');
  }
};
module.exports = { notion_log, notion_callback};
