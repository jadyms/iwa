
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

exports.getActivities = function(req, res) {
  TrackMyStudies.find({}, function (err, activity) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(activity);
  }); 
};

exports.getActivity= function(req, res) {
  TrackMyStudies.findOne({_id: req.params.id}, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

exports.deleteActivity = function(req, res) {
  TrackMyStudies.findByIdAndDelete(req.params.id, function (err) {
    if (err) {
        console.log("error");
      res.status(400).json(err); 
    } 
    console.log("user deleted");
     res.sendStatus(200);
    // res.json(activities);
    
  }); 
};
