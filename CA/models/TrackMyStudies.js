const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    category:{
        type: String,
        // required: true,
    },
    assignement:{
        type: String,
        required: true,
    },
    hoursPlanned: {
        type: String,
        required: true,
    },
    hoursDone: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('TrackMyStudies', Schema );