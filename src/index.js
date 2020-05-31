const express = require('express');

const app = express();
const { errors } = require('celebrate');

const routes = require('./routes');

app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);

//module.exports = app;