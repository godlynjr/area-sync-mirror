const config = require("./config.json");
const fetch = require('node-fetch');
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_ID,
    clientSecret: process.env.SPOTIFY_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  });

const login = (req, res) => {
    try {
        const authorizeURL = spotifyApi.createAuthorizeURL(['user-read-private', 'user-read-email', 'playlist-read-private'], 'state');
        res.send(authorizeURL);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};

const callback = async (req, res) => {
    const code = req.query.code;
    const data = {
        client_id: client_id,
        client_secret: client_secret,
        grant_type: 'authorization_code',
        redirect_uri: redirect_uri,
        code: code,
    };
    let response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: new URLSearchParams(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    let json = await response.json();
    console.log(json);
    console.log('Access Token: ' + json.access_token);
    console.log('Refresh Token: ' + json.refresh_token);

    let userResponse = await fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
            Authorization: `Bearer ${json.access_token}`,
        },
    });
    let userJson = await userResponse.json();
    console.log(userJson.items); // Affiche les informations de l'utilisateur dans la console
    res.redirect('http://localhost:3000/Spotify');
    // const user = await DiscordUser.findOne({ discordId: userJson.id });
    // if (user) {
    //     user.accessToken = json.access_token;
    //     user.refreshToken = json.refresh_token;
    //     await user.save();
    // } else {
    //     const newUser = new DiscordUser({
    //         discordId: userJson.id,
    //         username: userJson.username,
    //         accessToken: json.access_token,
    //         refreshToken: json.refresh_token,
    //     });
    //     await newUser.save();
    // }

    // // Renvoie les informations en réponse à la requête de rappel
    // res.json({
    //     accessToken: json.access_token,
    //     refreshToken: json.refresh_token,
    //     user: userJson,
    // });
};

module.exports = { login, callback };
