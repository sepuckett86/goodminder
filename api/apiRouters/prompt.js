const express = require('express');
const promptRouter = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite');

promptRouter.get('/', (req, res, next) => {
  db.all('SELECT * FROM Prompt', function (error, rows) {
    if (error) {
      res.status(404).send;
    } else {
      res.status(200).send({ express: rows})
    }
  })
})

module.exports = promptRouter;
