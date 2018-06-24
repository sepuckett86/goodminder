const express = require('express');
const apiRouter = express.Router();

const gminderRouter = require('./apiRouters/gminder');
const promptRouter = require('./apiRouters/prompt');

apiRouter.use('/gminder', gminderRouter);
apiRouter.use('/prompt', promptRouter);

module.exports = apiRouter;
