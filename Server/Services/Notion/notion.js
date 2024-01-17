const express = require('express');
const axios = require('axios');
const fetch = require('node-fetch');
require('dotenv').config();
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_SECRET });



const clientId = process.env.NOTION_ID;
const clientSecret = process.env.NOTION_SECRET;
const redirectUri = 'https://area-sync-stagging.onrender.com/users/notion/callback';
const database_id = process.env.NOTION_DATABASE_ID;

const notion_log = async (req, res) => {
  const authUrl = `https://api.notion.com/v1/oauth/authorize?client_id=302fe87e-a378-4cdd-a3e7-f583a514257c&response_type=code&owner=user&redirect_uri=https%3A%2F%2Farea-sync-stagging.onrender.com%2Fusers%2Fnotion%2Fcallback`;
  res.redirect(authUrl);
};

const createNotionPage = async (title, content, accessToken) => {
  const newNotion = new Client({ auth: accessToken });
  try {
    const response = await newNotion.pages.create({
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
      "children": [
        {
          "object": "block",
          "heading_2": {
            "rich_text": [
              {
                "text": {
                  "content": "Lacinato kale"
                }
              }
            ]
          }
        },
        {
          "object": "block",
          "paragraph": {
            "rich_text": [
              {
                "text": {
                  "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                  "link": {
                    "url": "https://en.wikipedia.org/wiki/Lacinato_kale"
                  }
                },
                "href": "https://en.wikipedia.org/wiki/Lacinato_kale"
              }
            ],
            "color": "default"
          }
        }
      ]
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
      headers: { accept: 'application/json', 'content-type': 'application/json' },
      auth: {
        username: clientId,
        password: clientSecret
      },
      data: { code: authCode, grant_type: 'authorization_code', redirect_uri: redirectUri, client_id: clientId, client_secret: clientSecret }
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


const sendEmailNotification = async (videoTitle, videoId) => {
  try {
      // Set up Nodemailer transporter (replace with your email configuration)
      const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: gmailUser,
              pass: gmailPassword,
          },
      });

      // Email content
      const mailOptions = {
          from: gmailUser,
          to: UserEmail,
          subject: 'New YouTube Video Uploaded',
          text: `A new video titled "${videoTitle}" has been uploaded. Watch it here: https://www.youtube.com/watch?v=${videoId}`,
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
  } catch (error) {
      console.error('Error sending email:', error);
  }
};
const Callback = async (req, res) => {
  const code = req.query.code
  if (code) {
      try {
          const { tokens } = await OAuth2Data.getToken(code);
          console.log('Successfully authenticated');
          OAuth2Data.setCredentials(tokens);
          const userProfile = await fetchUserEmail(tokens.access_token);
          UserEmail = userProfile;
          res.send({
              msg: "Successfully loggeed in to Youtube",
          });
          res.redirect('http://localhost:8081/Youtube');
      } catch (err) {
          console.log('Error authenticating')
          console.log(err);
      }
  }
};

// Function to fetch user profile information using the access token
const fetchUserEmail = async (accessToken) => {
  const response = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
          Authorization: `Bearer ${accessToken}`
      }
  });

  if (!response.data || !response.data.email) {
      throw new Error('Failed to fetch user email');
  }

  return response.data.email;
};

module.exports = { notion_log, notion_callback };
