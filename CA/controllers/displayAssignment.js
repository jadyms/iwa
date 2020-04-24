const trackModel = require('../models/TrackMyStudies.js')

// module.exports =  ((req, res) => {
//     const id = req.params.id;
//     trackModel.find({}, (err, activity) => {
//         res.render("put_index", { activity: activity, idTask: id });
//     });
// }).post((req, res) => {
//     const id = req.params.id;
//     trackModel.findOneAndUpdate(id, req.body, {new: true}, err => {
//     // trackModel.findByIdAndUpdate(id, req.body, {new: true}, err => {
    
//         console.log(req.body);
// if (err) return res.send(500, err);
// return res.redirect("/");
// });
// });


module.exports = async (req, res) => {

     const id = req.params.id;
   await trackModel.findOneAndUpdate(id, req.body, {new: true}, err => {
    // trackModel.findByIdAndUpdate(id, req.body, {new: true}, err => {
    
        console.log(req.body);
if (err) return res.send(500, err);
return res.redirect("/");
});
}

