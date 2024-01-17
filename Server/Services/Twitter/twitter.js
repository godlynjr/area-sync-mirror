const express = require('express');
const axios = require('axios');
const { twitterOAuth2 } = require('twitter-oauth2');

const twitter_client_id= process.env.TWITTER_ID;
const twitter_redirect_uri= process.env.TWITTER_REDIRECT_URI;
const twitter_secret= process.env.TWITTER_SECRET;

const Twit = require('twit');

const T = new Twit({
  consumer_key: 'eTmsrqLsmBxWaynSAzBULwuYU',
  consumer_secret: 'pnQYqnLPZcOF0NlSwGY0qGKAcWRzwTq2Ssz5onA9Jv0oouf44q',
  access_token: '2744375949-6Gt3XQdGyabjYPxUfnQJpokCHb2ise0fEGoUiOT',
  access_token_secret: 'ticssHmUnfD4QRJcRJNCGqY7ewzW8a26guSu12dqwSwMY'
});

function encodeUrl(url) {
    return encodeURIComponent(url);
}

const encodedUrls = encodeUrl(twitter_redirect_uri);

const twitter_login = async (req, res) => {
    const auth_link = `https://twitter.com/i/oauth2/authorize?client_id=${twitter_client_id}&scope=tweet.read%20users.read%20tweet.write%20offline.access&response_type=code&redirect_uri=${encodedUrls}&state=state&code_challenge=challenge&code_challenge_method=plain`;
    res.redirect(auth_link);
}


const getTwitterAccessToken = async (req, res) => {

    const { code, state } = req.query
    console.log("code: ", code);
    if (code) {
        try {
            const data = new URLSearchParams();
            data.append('code', code);
            data.append('grant_type', 'authorization_code');
            data.append('client_id', twitter_client_id);
            data.append('redirect_uri', twitter_redirect_uri);
            data.append('code_verifier', 'challenge');
            const response = await axios.post("https://api.twitter.com/2/oauth2/token", data,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                auth: {
                    username: twitter_client_id,
                    password: twitter_secret,
                }
            })
            const twitter_info = {
                access_token: response.data.access_token,
            }
            console.log("twitter access token:", response);
            await postTweet(req, res);
            res.status(200).send("you are connected");
        } catch (error) {
            console.error("Error making Axios request:", error);
            res.status(500).send("failed to connect");
        }
    } else {
        console.log("no code send");
    }
}

const postTweet = async (req, res) => {
  try {
    T.post('statuses/update', { status: 'Hello from Node.js!' }, (err, data, response) => {
      if (err) {
        console.log('Error:', err);
        res.status(500).send('Error posting tweet');
      } else {
        console.log('Tweet posted successfully!');
        res.status(200).send('Tweet posted successfully!');
      }
    });
  } catch (error) {
    console.log('Error posting tweet:', error);
    res.status(500).send('Error posting tweet');
  }
  // const tweetData = {
  //   status: tweetText,
  // };

  // const headers = {
  //   Authorization: `Bearer ${accessToken}`,
  // };

  // try {
  //   const response = await axios.post('https://api.twitter.com/2/tweets', tweetData, { headers });
  //   console.log('Tweet posté avec succès:', response.data);
  // } catch (error) {
  //   console.error('Erreur lors de la publication du tweet:', error.response.data);
  // }
};

module.exports = { twitter_login, getTwitterAccessToken};

// export async function postTweet(params, user)
// {
//     if (params.tweet) {
//         try {
//             const data = {
//                 text: params.tweet,
//             }
//             const response = await axios.post("https://api.twitter.com/2/tweets", 
//             data,
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${user.twitter.access_token}`,
//                 }
//             });
//             console.log(response.data)
//         } catch (error) {
//             console.error("error:", error);
//         }
//     } else {
//         console.error("error: tweet content is empty");
//     }
// }