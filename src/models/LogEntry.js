const mongoose = require('mongoose');

const LogEntrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Every Travel Has to Have a Title']
    },
    description: String,
    comments: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    image: {
        type: String,
        default: "https://us.123rf.com/450wm/barbulat/barbulat1809/barbulat180900094/109243289-stock-vector-no-image-available-sign.jpg?ver=6"
    },
    latitude: {
        type: Number,
        required: true,
        min: -90,
        max: 90
    },
    longitude: {
        type: Number,
        required: true,
        min: -180,
        max: 180
    },
    visitedAt: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('LogEntry', LogEntrySchema);
