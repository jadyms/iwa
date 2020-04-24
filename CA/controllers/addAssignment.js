const trackModel = require('../models/TrackMyStudies.js')

module.exports = async (req,res) =>{
     const todoTask = new trackModel(req.body);
     try {
         await todoTask.save();
         // res.json(todoTask);
         console.log("saved");
         return res.redirect('/');
        } catch (err) {
    console.log(req.status);
}
}


   