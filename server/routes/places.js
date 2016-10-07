const express = require('express');

//need body parser to take the data back, convert it to json, and put it back together.
  //we need to do this because the bodyParser will handle on and end events and add it to the req object as req.body.

const router = express.Router(); //lets you set up routes in a separate file to modularize
const Place = require('../models/place');
const bodyParser = require('body-parser').json();
// const bodyParser = require('../lib/bodyParser');

//my api is defined as the routes and what they do:
module.exports = router
  .get('/', (req,res,next) => {
    Place.find() //returns a promise
    .lean() //mongoose method
    .then(data => res.json(data)) //handle the promise. data is the result of the query/
    .catch(next); //next is express error handler that is provided from express
  })
  .get('/:id', (req, res, next) => {
    let id = req.params.id;
    Place.findById(id)
    .then(result => res.json(result))
    .catch(next); // .catch(err => next(err));
  })
  .post('/', bodyParser, (req, res, next) => {
    new Place(req.body)
    .save()
    .then(result => res.json(result))
    .catch(next);
  })
  .patch('/:id', bodyParser, (req, res, next) => {
    let id = req.params.id;
    // the first parameter _id <-- is how mongoDB has id numbers. the second id is the new data i'm sending
    // second parameter is the new data
    // third parameter is options
    Place.findOneAndUpdate({_id: id}, req.body, {new: true}) //new: true determines whether you see the data before the change.
                                        //req.body is the new data that the client sends.
    .then(data => res.json(data))
    .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Place.findOneAndRemove({_id: id})
    .then(data => res.json(data))
    .catch(next);
  });


  //api is defined by the endpoints you can access and the http verbs you can do to them.
  //


//is Place.find searching for '/' ?
//not sure about the post request


//
// $('.date-range').on('change', function(event){
//     event.preventDefault();
//     var stats = PortItem.all.map(function(obj){
//       return obj.created;
//     }).reduce(function(acc, curr){
//       if(curr > $('#start').val() && curr < $('#end').val()){
//         acc[curr] = true;
//       }
//       return acc;
//     }, {});
//     var ranged = PortItem.all.filter(function(obj){
//       return stats[obj.created];
//     });
//     $('.main-projects').hide();
//     ranged.forEach(function(obj){
//       $('[data-created="' + obj.created + '"]').fadeIn();
//     });
//   });
