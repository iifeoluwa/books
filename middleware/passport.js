const passport = require('passport');
const { compare } = require('bcrypt');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const { User } = require('../models');
const { server } = require('../config');

passport.use(new localStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ where: {email: email} });
    if (!user) {
      return done(null, false, { message: 'Invalid email or password.' });
    }
    //Validate password and make sure it matches with the corresponding hash stored in the database
    const validPassword = await compare(password, user.get('password'));

    if (!validPassword) {
      return done(null, false, { message: 'Invalid email or password.' });
    }

    return done(null, user, { message: 'Logged in Successfully' });
  } catch (error) {
    return done(error);
  }
}));

passport.use(new JWTstrategy({
  secretOrKey: server.jwt_key,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
}, async (token, done) => {
  try {
    //Pass the user details to the next middleware
    return done(null, token.user);
  } catch (error) {
    done(error);
  }
}));