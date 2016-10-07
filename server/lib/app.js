//the entry point for express

const express = require('express');
const app = module.exports = express(); //allows you to require app from another script.
const public = __dirname + '/../public';

app.use(express.static(public)); //express.static returns a route to the folder that is passed in. /user/michelle/coolapp/server/public
//any time a request comes in for the route specified '/' it'll serve up the file.

const logger = require('morgan')('dev');
app.use(logger);
//prints information about the request object for every request.

const places = require('../routes/places');
app.use('/api/place', places);

// make error handler here because the express app is here.
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.code || 500); //sets the status code of the response
  res.json(err.message || 'there was an error');
});
