const express = require('express');
const router = require('./controller/controller');

const app = express();

app.use(express.json());
app.use('/user', router);

app.use((error, req, res, _next) => res.status(500).send(error.message));

module.exports = app;
