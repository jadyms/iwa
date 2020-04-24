const trackModel = require('../models/TrackMyStudies.js')

module.exports = async (req,res) =>{
    const id = req.params.id;
    await trackModel.findByIdAndRemove(id, err => {
        if (err) return res.send(500, err);
        res.redirect("/");
    });
}


   