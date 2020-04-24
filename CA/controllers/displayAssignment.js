const trackModel = require('../models/TrackMyStudies.js')


module.exports = async (req, res) => {

     const id = req.params.id;
   await trackModel.findOneAndUpdate(id, req.body, {new: true}, err => {
    // trackModel.findByIdAndUpdate(id, req.body, {new: true}, err => {
    
        console.log(req.body);
if (err) return res.send(500, err);
return res.redirect("/");
});
}

