const express = require('express');
const axios = require('axios');
const { twitterOAuth2 } = require('twitter-oauth2');

const twitter_client_id= "cUszNmlwRWlRTkxpZ1kxYS0xcGk6MTpjaQ";
const twitter_redirect_uri= "http://localhost:8080/users/twitter/callback";

function encodeUrl(url) {
    return encodeURIComponent(url);
}

const encodedUrls = encodeUrl(twitter_redirect_uri);

const twitter_login = async (req, res) => {
    const auth_link = `https://twitter.com/i/oauth2/authorize?client_id=${twitter_client_id}&scope=tweet.read%20users.read%20offline.access&response_type=code&redirect_uri=${encodedUrls}&state=state&code_challenge=challenge&code_challenge_method=plain`;
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
                    password: "HkFlEJjeEqDd4WegFaP_uaa14mKHnYxtxZ_ofV-S_uDQ-NzniV",
                }
            })
            const twitter_info = {
                access_token: response.data.access_token,
            }
            console.log("twitter access token:", response.data.access_token);
            res.status(200).send("you are connected");
        } catch (error) {
            console.error("Error making Axios request:", error);
            res.status(500).send("failed to connect");
        }
    } else {
        console.log("no code send");
    }
}


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



const twitterConfig = {
  apiKey: 'cUszNmlwRWlRTkxpZ1kxYS0xcGk6MTpjaQ',
  apiSecretKey: 'HkFlEJjeEqDd4WegFaP_uaa14mKHnYxtxZ_ofV-S_uDQ-NzniV',
  accessToken: '2744375949-561txmcNNfU7usmgp7uGo6SRzJqGmnFHk52J9GZ',
  accessTokenSecret: 'QUQEop3Z4ngs2Sp6XdL8VAQV8bI4hM8sUOhZVkqgKobyL',
};

const postTweet = async (apiKey, apiSecretKey, accessToken, accessTokenSecret, tweetText) => {
  const tweetData = {
    status: tweetText,
  };

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await axios.post('https://api.twitter.com/2/tweets', tweetData, { headers });
    console.log('Tweet posté avec succès:', response.data);
  } catch (error) {
    console.error('Erreur lors de la publication du tweet:', error.response.data);
  }
};

const tweetText = 'Bonjour, Twitter! #TwitterAPIv2';

postTweet(
  twitterConfig.apiKey,
  twitterConfig.apiSecretKey,
  twitterConfig.accessToken,
  twitterConfig.accessTokenSecret,
  tweetText
);


module.exports = { twitter_login, getTwitterAccessToken, postTweet };
