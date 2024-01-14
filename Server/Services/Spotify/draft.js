// Variable to store existing liked songs URIs
let existingLikedSongs = [];

const getUserLikedSongs = (spotifyApi) => {
    // Get the user's liked songs
    return spotifyApi.getMySavedTracks()
        .then(data => {
            const tracks = data.body.items;
            // Extract track URIs
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
                // Playlist does not exist, create it
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

const sp = () => {
    var SpotifyWebApi = require('spotify-web-api-node');
    var spotifyApi = new SpotifyWebApi({
        clientId: '6ca8b5e6ea6945ce9a12dcbf7ed30fc0',
        clientSecret: 'cff2feb9040b4320a8716ff6b0c11b10',
        redirectUri: 'https://www.google.com'
    });
    const authorizeURL = spotifyApi.createAuthorizeURL(['user-library-read', 'playlist-modify-public', 'playlist-modify-private'], 'STATE');
    console.log(authorizeURL);
    const prompt = require('prompt-sync')();
    var code = prompt("Enter Code: ");
    spotifyApi.authorizationCodeGrant(code)
        .then(data => {
            console.log('The token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);
            console.log('The refresh token is ' + data.body['refresh_token']);

            // Configure the API with the new access token
            spotifyApi.setAccessToken(data.body['access_token']);
            spotifyApi.setRefreshToken(data.body['refresh_token']);

            // Set the interval to check and add new liked songs
            setInterval(() => {
                addNewLikedSongsToPlaylist(spotifyApi, 'YOUR_PLAYLIST_ID');
            }, 3000);
        })
        .catch(error => {
            console.error('Error getting access token:', error);
        });
};

sp();