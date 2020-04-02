/* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors');
const users = require('./lib/users');

const app = express();

app.use(cors());

const routes = require('./routes.js');

app.use(express.json());
app.use(users.authMiddleware);
app.use(routes);

module.exports = app;
