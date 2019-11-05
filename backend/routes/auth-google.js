const express = require('express');
const { google } = require('googleapis');
const dotenv = require('dotenv').config();
const axios = require('axios');
const jwt = require('jwt-simple');
// const plus = google.plus('v1');
const router = express.Router();
const { User } = require('../data').models;

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

google.options({ auth: oauth2Client });

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

  await oauth2Client.getToken(code, async (err, tokens) => {
    try {
      oauth2Client.setCredentials(tokens);
      const token = tokens.id_token;
      const userData = (await axios.get(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`,
      )).data;

      let user = await User.findOne({
        where: {
          googleId: userData.sub,
          email: userData.email,
        },
      });

      if (!user) {
        user = (await User.create({
          firstName: userData.given_name,
          lastName: userData.family_name,
          email: userData.email,
          password: userData.sub,
          googleId: userData.sub,
        })).dataValues;
      }

      const authToken = jwt.encode({ id: userData.sub }, process.env.SECRET);
      req.session.user = authToken;
      res.redirect(`/?token=${authToken}`);
    } catch (ex) {
      // throw ex
      console.log('err--->', ex);
    }
  });
});

module.exports = router;
