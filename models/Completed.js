const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompletedSchema = new Schema({
    userID: {
        type: String
    },
    id: {
        type: Number
    },
    name: {
        type: String
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
    }
})

const Completed = mongoose.model('completed', CompletedSchema);

module.exports = Completed