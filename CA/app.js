//Modules
const dotenv = require('dotenv').config(); //Credentials for MongoDB
const express = require('express'); //require Express
const app = express(); //Assign express function
const mongoose = require('mongoose'); //MongoDB connection using mongoose module
const trackModel = require('./models/TrackMyStudies');// Collection Schema
// const path = require('path');
const bodyParser = require('body-parser');//To handle the incoming requests from the browser
// Express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set("view engine", "ejs");//Template engine to render html

app.use(express.static('public')); //Serving static files

//Database Connection
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser : true},
    () => {
        console.log("Connected to MongoDB ");

        //Connection to the server only happens after DB connection
        app.listen(process.env.PORT || 3005, process.env.IP || "0.0.0.0", function() {
       console.log("Server listening");
        });
})

mongoose.set("useFindAndModify", false); //Suppress deprecated warning message

/*
 CONTROLLERS
*/
const allActivitiesController = require('./controllers/allAssignments');
const addAssignment = require('./controllers/addAssignment');
const deleteAssignment = require('./controllers/deleteAssignment');
const updateAssignment = require('./controllers/updateAssignment');
const displayAssignment = require('./controllers/displayAssignment');

/*
 ROUTES
*/
app.get('/', allActivitiesController);//get and display all stored data 
app.post('/', addAssignment); //add new assignment to the list
app.get('/activities/:id', deleteAssignment); //delete assignment from the list
app.get('/put/:id', updateAssignment) //update assignment
app.post('/display/:id', displayAssignment);//display updates assignment

