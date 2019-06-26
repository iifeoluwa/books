const { Router } = require('express');

const router = Router();

/**
 * The default index route handler.
 * Responds to a request with body content to demonstrate the app is running as expected.
 */
const index = (req, res, next) => {
  res.end(`Express Code Challenge Started`);
};

router.get('/', index);

router.all('*', (req, res, next) =>
  res.status(404).jsend.error('You have reached a non-existent resource.')
);

module.exports = router;