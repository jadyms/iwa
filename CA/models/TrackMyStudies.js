//Mongoose module
const mongoose = require('mongoose');

//Collection Schema
const Schema = new mongoose.Schema({
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