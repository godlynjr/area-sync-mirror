const config = require("./config.json");
const fetch = require('node-fetch');
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  });

let redirectURL = '';

const ConnectSpotify = (req, res) => {
    try {
        const authorizeURL = spotifyApi.createAuthorizeURL(['user-read-private', 'user-read-email', 'playlist-read-private'], 'state');
        redirectURL = req.headers.url;
        res.send(authorizeURL);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
};

const SpotifyCallback = async (req, res) => {
    const code = req.query.code;
    const data = {
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
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
    // console.log(json);
    // console.log('Access Token: ' + json.access_token);
    // console.log('Refresh Token: ' + json.refresh_token);

    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);

    // setInterval(() => {
    //     addNewLikedSongsToPlaylist(spotifyApi, 'YOUR_PLAYLIST_ID');
    // }, 3000);

    res.redirect(redirectURL);
};

// Area 1

const addNewLikedSongsToPlaylist = (spotifyApi, playlistName) => {
    // Get the user's current liked songs
    getUserLikedSongs(spotifyApi)
        .then(newTrackURIs => {
            // Find the newly liked songs by comparing with existingLikedSongs
            const newlyLikedSongs = newTrackURIs.filter(uri => !existingLikedSongs.includes(uri));

            if (newlyLikedSongs.length > 0) {
                // Add the newly liked songs to the playlist
                addTracksToPlaylist(spotifyApi, playlistName, newlyLikedSongs);
            }

            // Update existingLikedSongs for the next interval
            existingLikedSongs = newTrackURIs;
        })
        .catch(error => {
            console.error('Error adding new liked songs to playlist:', error);
        });
};

const createPlaylistWithLikedSongs = (req, res) => {
    setInterval(() => {
        addNewLikedSongsToPlaylist(spotifyApi, 'AREASYNC_PLAYLIST');
    }, 3000);
}

module.exports = { ConnectSpotify , SpotifyCallback, createPlaylistWithLikedSongs };
