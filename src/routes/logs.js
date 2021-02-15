const express = require('express');
const logsController = require('../controllers/logs');

const logRouter = express.Router();

logRouter.get('/', logsController.getAllLogs);

logRouter.post('/', logsController.createLog);

module.exports = logRouter;
