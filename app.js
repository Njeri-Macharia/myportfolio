const express = require('express');
const path = require('path');

const app=express();


// set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// set the public directory
app.use(express.static(path.join(__dirname, 'public')));

// import routes
const page=require('./routes/index');


// set routes
app.use('/',page);

module.exports=app;