const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompletedSchema = new Schema({
    userID: {
        type: String
    },
    id: {
        type: String
    },
    name: {
        type: String
    },
    ascent: {
        type: Number
    },
    difficulty: {
        type: String
    },
    high: {
        type: Number
    },
    imgMedium: {
        type: String
    },
    length: {
        type: String
    },
    ascent: {
        type: Number
    },
    summary: {
        type: String
    },

    userComment: {
        type: String
    },

    day: {
        type: Date,
        default: Date
    }
})

const Completed = mongoose.model('completed', CompletedSchema);

module.exports = Completed