const { Router } = require('express');
const passport = require('passport');

const { validateCreateData, validateLoginData } = require('../validations');
const { create, fetchBooks } = require('../controllers/user');
const { login } = require('../controllers/auth');

const router = Router();

/**
 * The default index route handler.
 * Responds to a request with body content to demonstrate the app is running as expected.
 */
const index = (req, res, next) => {
  res.status(200).jsend.success(`Express Code Challenge Started`);
};

router.get('/', index);
router.post('/users/create', validateCreateData, create);
router.post('/users/signin', validateLoginData, login);
router.post('/books', passport.authenticate('jwt', { session : false }), fetchBooks);

router.all('*', (req, res, next) =>
  res.status(404).jsend.error('You have reached a non-existent resource.')
);

module.exports = router;