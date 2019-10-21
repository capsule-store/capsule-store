const express = require('express');
const passport = require('passport');
const router = express.Router();
require('../config/google-passport').passport

router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile'],
  }),
);

// call back route for google oauth2
router.get('/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

module.exports = router;
