'use strict';

const jwt = require('jsonwebtoken');
const passport = require('passport');
const { server } = require('../config');

const login = async (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    try {
      if (err || !user) {
        res.status(400).jsend.fail(info.message)
      }

      req.login(user, { session: false }, error => {
        if (error) {
          res.status(500).jsend.fail(error.message);
        }
        const body = { _id: user.id, email: user.email };
        //Sign the JWT token and populate the payload with the user email and id
        const token = jwt.sign({ user: body }, server.jwt_key);
        //Send back the token to the user
        return res.status(200).jsend.success({token});
      });
    } catch (error) {
      res.status(500).jsend.fail(error.message);
    }
  })(req, res, next);
}

module.exports = {
  login
}