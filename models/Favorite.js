const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
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
    },
    latitude: {
        type: Number
    },
    longitude:{
        type: Number
    },
    location: {
        type: String
    }
})

const Favorite = mongoose.model('favorites', FavoriteSchema);

module.exports = Favorite