/*
    GET ALL ASSIGNMENTS FROM THE DB
*/


const trackModel = require('../models/TrackMyStudies.js') //Accessing Schema

module.exports = async (req,res) =>{
    //Find all entries in the DB
    const activity = await trackModel.find({})
    
    //Display index.ejs page with DB entries
    res.render("index", { activity: activity});
}