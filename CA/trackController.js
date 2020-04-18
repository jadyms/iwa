const TrackMyStudies = require('./models/TrackMyStudies');

exports.addActivity = function(req, res){
    const newActivity = new TrackMyStudies(req.body);
    newActivity.save(function (e, newActivity){
        if(e){
            res.status(400).json(e);
        }
        res.json(newActivity);

    });
};