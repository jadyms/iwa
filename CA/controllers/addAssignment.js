/*
    ADD ONE ASSIGNMENT 
*/


const trackModel = require('../models/TrackMyStudies.js') //Accessing Schema

//Request to the server
module.exports = async (req,res) =>{
    //Get the new data from browser
     const todoTask = new trackModel(req.body);
          
     try {
         //Save the data
         await todoTask.save();
         console.log("saved");
         //Refresh the page 
         return res.redirect('/');
         
        } catch (err) {
    console.log(req.status);
}
}


   