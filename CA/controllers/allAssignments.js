const trackModel = require('../models/TrackMyStudies.js')

module.exports = async (req,res) =>{
    const activity = await trackModel.find({})

res.render("index", { activity: activity});



}