const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const jsend = require("jsend");

const router = require("./routes");
const { server } = require("./config");

const app = express();

// Body parser and helmet middleware
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(jsend.middleware);

// Register app Routes
app.use(router);

app.listen(server.port, () => console.log(`Server listening at ${server.port}`));

module.exports = app;