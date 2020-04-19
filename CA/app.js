// Code from Mikhail - available at:
// https://github.com/mikhail-cct/CA1-In-class-Demo/blob/master/app.js
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const trackModel = require('./models/TrackMyStudies');
const Track = require('./trackController');


app.use(express.static(path.resolve(__dirname, 'views'))); //We define the views folder as the one where all static content will be served
//app.use(express.urlencoded({extended: true})); //We allow the data sent from the client to be coming in as part of the URL in GET and POST requests




mongoose.set("useFindAndModify", false);

//Database Connection
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser : true},
    () => {
        console.log("Connected to MongoDB");

        //Connection to the server only happens after DB connection
        app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
       console.log("Server listening");
});
    })


    //Default route
// app.get('/', function(req, res){

//     res.render('index');

// });

// app.post('/getJson',function(req,res){

//     console.log(res.body.foo);

// });

//Post route

// app.get("/", (req,res) => {
//      db.collection('test').find().toArray()
//     .then(results => {
//       console.log(results)
//     })
//     .catch(error => console.error(error))

//      res.render('index');

// });
// app.use(express.urlencoded({ extended: true }));
app.post('/', Track.addActivity);

//Get all activities route
app.get('/activities', Track.getActivities);

//Get all activities route
app.get('/', Track.getActivities);

//Get Specific activity by id
app.get('/activities/:id', Track.getActivity);

//Delete by id
app.delete('/activities/:id', Track.deleteActivity);

//Update by id
app.put('/activities/:id', Track.updateActivity);




// Post Route async
// app.post('/', async (req,res) =>{
//     const track = new Track({
//         content: req.body.content
        
//     });

//     try{
//         await track.save();
//         console.log(req.body);
//         res.redirect('/');
//     }catch(e){
//         console.log(e);
//         res.redirect('/');

//     }
// });

// var http = require('http'), //This module provides the HTTP server functionalities
//     path = require('path'), //The path module provides utilities for working with file and directory paths
//     //This module allows this app to respond to HTTP Requests, defines the routing and renders back the required content
//     fs = require('fs'), //This module allows to work witht the file system: read and write files back
//     xmlParse = require('xslt-processor').xmlParse, //This module allows us to work with XML files
//     xsltProcess = require('xslt-processor').xsltProcess, //The same module allows us to utilise XSL Transformations
//     xml2js = require('xml2js'); //This module does XML to JSON conversion and also allows us to get from JSON back to XML

// var router = express(); //The set our routing to be handled by Express
// var server = http.createServer(router); //This is where our server gets created

//router.use(express.json()); //We include support for JSON that is coming from the client


// Function to read in XML file and convert it to JSON
// function xmlFileToJs(filename, cb) {
//   var filepath = path.normalize(path.join(__dirname, filename));
//   fs.readFile(filepath, 'utf8', function(err, xmlStr) {
//     if (err) throw (err);
//     xml2js.parseString(xmlStr, {}, cb);
//   });
// }

//Function to convert JSON to XML and save it
// function jsToXmlFile(filename, obj, cb) {
//   var filepath = path.normalize(path.join(__dirname, filename));
//   var builder = new xml2js.Builder();
//   var xml = builder.buildObject(obj);
//   fs.writeFile(filepath, xml, cb);
// }





// // POST request to add to JSON & XML files
// router.post('/post/json', function(req, res) {

//   // Function to read in a JSON file, add to it & convert to XML
//   function appendJSON(obj) {
//     // Function to read in XML file, convert it to JSON, add a new object and write back to XML file
//         xmlFileToJs('TrackMyStudies.xml', function(err, result){
//             if(err) throw (err);
//                 result.todo.category[obj.sec_n].activity.push({'assignement': obj.assignement, 'hoursPlanned': obj.hoursPlanned, 'hoursDone': obj.hoursDone});
//                 console.log(result);
//                 jsToXmlFile('TrackMyStudies.xml', result, function(err){
//                     if(err) console.log(err);
//                 })
//         })
//     }
//       // Call appendJSON function and pass in body of the current POST request
//     appendJSON(req.body);
//     // Re-direct the browser back to the page, where the POST request came from
//     res.redirect('back');
// });

// POST request to add to JSON & XML files
// router.post('/post/delete', function(req, res) {

  // Function to read in a JSON file, add to it & convert to XML
//   function deleteJSON(obj) {
//     // Function to read in XML file, convert it to JSON, delete the required object and write back to XML file
//     xmlFileToJs('TrackMyStudies.xml', function(err, result) {
//       if (err) throw (err);
//       //This is where we delete the object based on the position of the category and position of the activity, as being passed on from index.html
//          delete result.todo.category[obj.category].activity[obj.activity]
//       //This is where we convert from JSON and write back our XML file
//       jsToXmlFile('TrackMyStudies.xml', result, function(err) {
//         if (err) console.log(err);
//       })
//     })
//   }

//   // Call appendJSON function and pass in body of the current POST request
//   deleteJSON(req.body);

// });



//We define the root of our website and render index.html located inside the views folder

//We define a new route /get/html to be rendering our HTML table that is being generated by applying XSL file to XML
// router.get('/get/html', function(req, res) {

//     res.writeHead(200, {'Content-Type': 'text/html'}); //We are responding to the client that the content served back is HTML and the it exists (code 200)


//     var xml = fs.readFileSync('TrackMyStudies.xml', 'utf8'); //We are reading in the XML file
//     var xsl = fs.readFileSync('TrackMyStudies.xsl', 'utf8'); //We are reading in the XSL file
//     console.log(xml); 
//     var doc = xmlParse(xml); //Parsing our XML file
//     var stylesheet = xmlParse(xsl);//Parsing our XSL file
//     var result = xsltProcess(doc, stylesheet); //Execute Transformation
//     res.end(result.toString()); //We render the result back to the user converting it to a string before serving



// });



// cd ..
// git init
// git add "Folder Name"
// git commit 'Name of the commit'
// git push origin 'Branch'
// git pull origin 'Branch'
