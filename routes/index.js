/**
 * The default index route handler.
 * Responds to a request with body content to demonstrate the app is running as expected.
 */
const index = (req, res, next) => {
  res.end(`Express Code Challenge Started`);
};

const register = (app) => {
  app.get('/', index);
}

module.exports = {
  register
};