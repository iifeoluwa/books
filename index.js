const express = require('express');
const app = express();

const router = require('./routes');

router.register(app);

app.listen(3000, () => console.log(`Open http://localhost:3000 to see a response.`));