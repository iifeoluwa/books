const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const jsend = require("jsend");

const router = require("./routes");
const { server } = require("./config");
const { sequelize, createInitialInstitution } = require('./models');

const isTestEnvironment = process.env.NODE_ENV === 'test';
const app = express();

require('./middleware/passport');

app.use(helmet());
app.use(express.json())
app.use(jsend.middleware);

// Register app Routes
app.use(router);

if (isTestEnvironment) {
  app.listen(server.port, () => console.log(`Server listening at ${server.port}`));
} else {
  sequelize.sync({ force: true }).then(() => {
    createInitialInstitution();

    app.listen(server.port, () => console.log(`Server listening at ${server.port}`));
  });

}

module.exports = app;