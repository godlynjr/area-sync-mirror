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
    // const data = {
    //     client_id: process.env.SPOTIFY_CLIENT_ID,
    //     client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    //     grant_type: 'authorization_code',
    //     redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    //     code: code,
    // };

    // let response = await fetch('https://accounts.spotify.com/api/token', {
    //     method: 'POST',
    //     body: new URLSearchParams(data),
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    // });
    
    spotifyApi.authorizationCodeGrant(code)
        .then(data => {
    
            console.log('The access token is ' + data.body['access_token']);
            console.log('The refresh token is ' + data.body['refresh_token']);

            // Configure the API with the new access token
            spotifyApi.setAccessToken(data.body['access_token']);
            spotifyApi.setRefreshToken(data.body['refresh_token']);

        })
        .catch(error => {
            console.error('Error getting access token:', error);
        });

    res.redirect(redirectURL);
};

// Area 1

let existingLikedSongs = [];

const getUserLikedSongs = (spotifyApi) => {
    return spotifyApi.getMySavedTracks()
        .then(data => {
            const tracks = data.body.items;
            const trackURIs = tracks.map(track => track.track.uri);
            console.log('User liked songs:', trackURIs);
            return trackURIs;
        })
        .catch(error => {
            console.error('Error getting user liked songs:', error);
            throw error;
        });
};

const addTracksToPlaylist = (spotifyApi, playlistName, trackURIs) => {
    return spotifyApi.getUserPlaylists()
        .then(data => {
            const playlists = data.body.items;
            const existingPlaylist = playlists.find(playlist => playlist.name === playlistName);

            if (existingPlaylist) {
                console.log('Playlist already exists:', existingPlaylist);
                return spotifyApi.addTracksToPlaylist(existingPlaylist.id, trackURIs)
                    .then(data => {
                        console.log('Added tracks to playlist!');
                    })
                    .catch(error => {
                        console.error('Error adding tracks to playlist:', error);
                        throw error;
                    });
            } else {
                return spotifyApi.createPlaylist(playlistName, { description: 'Playlist created by your app', public: true })
                    .then(data => {
                        console.log('Created playlist:', data.body);
                        return spotifyApi.addTracksToPlaylist(data.body.id, trackURIs)
                            .then(() => {
                                console.log('Added tracks to playlist!');
                            })
                            .catch(error => {
                                console.error('Error adding tracks to playlist:', error);
                                throw error;
                            });
                    })
                    .catch(error => {
                        console.error('Error creating playlist:', error);
                        throw error;
                    });
            }
        })
        .catch(error => {
            console.error('Error getting user playlists:', error);
            throw error;
        });
};

const addNewLikedSongsToPlaylist = (spotifyApi, playlistName) => {
    console.log('function triggered:');
    getUserLikedSongs(spotifyApi)
        .then(newTrackURIs => {
            const newlyLikedSongs = newTrackURIs.filter(uri => !existingLikedSongs.includes(uri));

            if (newlyLikedSongs.length > 0) {
                addTracksToPlaylist(spotifyApi, playlistName, newlyLikedSongs);
            }
            existingLikedSongs = newTrackURIs;
        })
        .catch(error => {
            console.error('Error adding new liked songs to playlist:', error);
        });
};

const createPlaylistWithLikedSongs = (req, res) => {
    setInterval(() => {
        addNewLikedSongsToPlaylist(spotifyApi, 'AREASYNC_PLAYLIST');
    }, 10 * 60 * 1000);
}

module.exports = { ConnectSpotify , SpotifyCallback, createPlaylistWithLikedSongs };
