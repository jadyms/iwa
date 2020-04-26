/*
    DELETE ASSIGNMENT BY ID
*/


const trackModel = require('../models/TrackMyStudies.js') //Accessing Schema

module.exports = async (req,res) =>{
    //Get it from from end
    const id = req.params.id;
    //Find entry with id from front end
    await trackModel.findByIdAndRemove(id, err => {
        //If not found, display error 500
        if (err) return res.send(500, err);
        //If found and deleted, redirect to main page
        res.redirect("/");
    });
}


   