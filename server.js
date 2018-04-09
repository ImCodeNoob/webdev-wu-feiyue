// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

app.use(session({
  secret: 'S3CR3T!',
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// mongodb://<dbuser>:<dbpassword>@ds115768.mlab.com:15768/heroku_8xzzq2rc
// var connectionString = 'mongodb://localhost:27017/webdev'; // for local
var connectionString = 'mongodb://test:test@ds263707.mlab.com:63707/heroku_5710c88c';
var mongoose = require("mongoose");
mongoose.createConnection(connectionString);


// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src/assets')));



// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});




const port = process.env.PORT || '3100';
app.set('port', port);


// Create HTTP server -- here
const server = http.createServer(app);

//var serverSide = require("./server/test-mongodb/app");
//serverSide(app);



// For Build: Catch all other routes and return the index file -- BUILDING
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'src/index.html'));
// });


// server.listen( port , () => console.log('Running on port 3100'));

require('./assignment/app')(app);

app.get('*', function (req, res) {
  // res.sendFile(path.join(__dirname, 'dist/index.html'));
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen( port , function() {
  console.log('Node app is running on port', app.get('port'))});
