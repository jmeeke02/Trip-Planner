var express = require('express')
var router = express.Router(); 
var Bluebird = require('bluebird')
var models = require('../models'); 
var Hotel = models.Hotel; 
var Restaurant = models.Restaurant; 
var Activity = models.Activity; 


router.get('/', function(req, res, next){
  Bluebird.all([
    Hotel.find({}),
    Restaurant.find({}), 
    Activity.find({})
  ])
  .spread(function(hotels, restaurants, activities){
    // render some index html that doesnt exist yet with this data 
  })
 

})


module.exports = router; 