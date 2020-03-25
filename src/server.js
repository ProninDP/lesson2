const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const routes = require('./routes.js');

app.use(express.json());
app.use(routes);

module.exports = app;