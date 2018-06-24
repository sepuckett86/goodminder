const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./api/api');
app.use('/api', apiRouter);

// Error handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

module.exports = app;
