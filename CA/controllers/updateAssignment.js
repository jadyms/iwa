const trackModel = require('../models/TrackMyStudies.js')

module.exports = async (req, res) => {

    const id = req.params.id;
    await trackModel.find({}, (err, activity) => {
        res.render("put_index", { activity: activity, idTask: id });
    });
}
