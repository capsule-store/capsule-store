const express = require('express');
const { google } = require('googleapis');
const dotenv = require('dotenv').config();
const axios = require('axios');

const router = express.Router();
router.use(express.json());
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
} = process.env;

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
);

// generate a url that asks permissions for profile scopes
const scopes = ['profile', 'email'];

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
  scope: scopes,
});

router.get('/', (req, res) => {
  res.redirect(url);
});

// call back route for google oauth2
router.get('/callback', async (req, res) => {
  const { code } = req.query;
  console.log('code',code)
  const token = await oauth2Client.getToken(code, (err, token) => {
    /*
    console.log('access token:', token);
    const {access_token} = token
    axios.post(`https://www.googleapis.com/gmail/v1/users/${token.id_token}/profile`)
      .then(response => response.data)
      .then(user => res.send(user)) 
      */

  });

});

module.exports = router;
