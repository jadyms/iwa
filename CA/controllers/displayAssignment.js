/*
    SELECT ONE ASSIGNMENT TO BE UPDATED
*/

const trackModel = require('../models/TrackMyStudies.js') //Accessing Schema


module.exports = async (req, res) => {

console.log("entry point")
    //Get id from front end
     const id = req.params.id;
     //Find the data in the db, update with
     //new data, display update (new:true)
   await trackModel.findByIdAndUpdate(id, req.body, {new: true}, err => {
    console.log(id + " id ");
    //If not found, display error 500
    if (err) return res.send(500, err);
    //redirect to the main page
    return res.redirect("/");
});
}

