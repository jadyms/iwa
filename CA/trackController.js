
const TrackMyStudies = require('./models/TrackMyStudies');

//Create new Activity
exports.addActivity = function(req, res){
    const newActivity = new TrackMyStudies(req.body);
    newActivity.save(function (e, newActivity){
        if(e){
            res.status(400).json(e);
        }
        res.json(newActivity);

    });
};

//Get all activities
exports.getActivities = function(req, res) {
  TrackMyStudies.find({}, function (err, activity) {
    if (err) {
      res.status(400).json(err); 
    } 
     res.render('index.ejs',{activity: activity});

    // res.json(activity);
  }); 
      
};

//Get specific activity by id
exports.getActivity= function(req, res) {
  TrackMyStudies.findOne({_id: req.params.id}, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
   
  }); 
};



//Delete activity by id
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

exports.updateActivity = function(req, res) {
  TrackMyStudies.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};