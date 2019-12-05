const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

//clientId 414082177470-hp5ce3eccc11i9usdvcpsvsgp4rh8mh7.apps.googleusercontent.com
//clientSecret 4WJTQevlf2yheJFai3tg46SB
passport.use(new GoogleStrategy());
//http://localhost:5000/auth/google/callback
const PORT = process.env.PORT || 5000;
app.listen(PORT);
