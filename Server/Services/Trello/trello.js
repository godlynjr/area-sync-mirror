const express = require('express');
const fetch = require('node-fetch');
const url = require('url');
const querystring = require('querystring');

const CLIENT_ID = '43103a7dad47862c9991206e12024b67';
const CLIENT_SECRET = 'c2129f4e9b3bd5eaffc5b91b72c029ef2defc393d5dd7ca0c9ff6e6cab499965';
const TRELLO_REDIRECT_URI = 'http://localhost:8080/users/trello/callback';

const trello_login = (req, res) => {
    const authUrl = `https://trello.com/1/authorize?expiration=never&name=MyApp&scope=read,write&callback_method=fragment&response_type=fragment&key=${CLIENT_ID}&return_url=${encodeURIComponent(TRELLO_REDIRECT_URI)}`;
    res.redirect(authUrl);
};

const trello_callback = async (req, res) => {
//    let a = url.toString();
    console.log(req);
    const fragment = req.url.split('#')[1]; // Récupérez la partie après le '#'

    // Parsez les paramètres du fragment (par exemple, le token)
    const params = new URLSearchParams(fragment);
    console.log(fragment);

    const token = params.get('token');
    console.log('Token reçu:', token);
    res.send('token receive');

    // let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    // let parsedUrl = url.parse(fullUrl);
    // let fragment = parsedUrl.hash;

    // if (fragment) {
    //     let token = fragment.substring(1);
    //     console.log(token);
    // } else {
    //     console.log('No token found in the URL');
    // }

    // const response = await axios.post('https://trello.com/1/token', {
    // code,
    // key: process.env.TRELLO_API_KEY,
    // secret: process.env.TRELLO_API_SECRET,
    // redirect_uri: process.env.TRELLO_CALLBACK_URL
    // });
    // const accessToken = response.data.access_token;

    //res.send('Authentification réussie !');
};


module.exports = { trello_login, trello_callback };