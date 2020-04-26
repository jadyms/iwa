/*
    SELECT ONE ASSIGNMENT TO BE UPDATED
    AND RENDER NEW PAGE TO HOLD THE CHANGES
*/


const trackModel = require('../models/TrackMyStudies.js') //Accessing Schema

module.exports = async (req, res) => {
    //Get id from front end
    const id = req.params.id;
    //Find by id
    await trackModel.find({}, (err, activity) => {
        //Display new page with input to be modified
        //according to id
        res.render("put_index", { activity: activity, idTask: id });
        console.log("new page rendered")
    });
}

