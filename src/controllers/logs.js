const LogEntry = require('../models/LogEntry');

// Getting All Logs
exports.getAllLogs = async (req, res, next) => {
    try {
        const allLogs = await LogEntry.find({});
        res.json({ success: true, count: allLogs.length, data: allLogs });
    } catch (error) {
        next(error);
    };
};

// Creating New Log
exports.createLog = async (req, res, next) => {
    try {
        const newLog = await LogEntry.create(req.body);
        res.json({ success: true, data: newLog });
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400);
        };
        next(error);
    };
};
