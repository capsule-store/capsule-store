const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
const dotenv = require('dotenv').config();

const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = process.env;

passport.use(new GoogleStrategy({
  clientID:     GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
  //passport callback function
  //receive profile object
}
));