/* eslint-disable linebreak-style */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

mongoose
  .connect('mongodb://127.0.0.1:27017/mydb')
  .then(() => console.log('База данных подключена'))
  .catch((err) => console.log(err));

app.use((req, res, next) => {
  req.user = { _id: '64b402b859e524a7e1059ce9' };
  next();
});

app.use(bodyParser.json());
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.listen(PORT, () => {
  console.log('Сервер запущен');
});