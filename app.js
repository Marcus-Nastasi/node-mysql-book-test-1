require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./src/routes/routes');

app.use(express.json());

app.use(router);

app.listen(3000);

