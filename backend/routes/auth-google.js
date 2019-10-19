const express = require("express");
const router = express.Router();

router.get('/auth/google',
  passport.authenticate('google', { 
    scope: [ 'profile' ] }
));

//call back route for google oauth2
router.get( '/auth/google/callback', 
    passport.authenticate( 'google', { 
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));

module.exports = router;