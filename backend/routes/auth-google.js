const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile'],
  }),
);

// call back route for google oauth2
router.get(
  '/callback',
  passport.authenticate('google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure',
  }),
);

module.exports = router;
