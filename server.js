// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();


/* Dependencies */
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;

// Spin up the server
// Callback to debug
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// Initialize all route with a callback function

// Post Route
app.post('/setData', (req, res)=>{
  projectData = {
    temp: req.body.temp,
    date: req.body.date,
    content: req.body.content
  };
  res.send(projectData);
  console.log('setData')
  console.log(projectData);
})

// Callback function to complete GET '/all'
app.get('/all', (req, res)=>{
  res.send(projectData);
  console.log('project data sent from server side');
  console.log(projectData);
})
