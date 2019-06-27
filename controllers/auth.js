'use strict';

const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { server } = require('../config');

const login = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsend.fail({ errors: errors.array() });
  }
  
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
        const token = jwt.sign({ user: body }, server.jwt_key, {expiresIn: 60 });
        return res.status(200).jsend.success({token});
      });
    } catch (error) {
      res.status(500).jsend.error(error.message);
    }
  })(req, res, next);
}

module.exports = {
  login
}