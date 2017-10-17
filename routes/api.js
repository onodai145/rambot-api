var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var config = require('config');

mongodb.MongoClient.connect("mongodb://"+config.db.host+":"+config.db.port+"/"+config.db.dbName , function(err, database) {
  users = database.collection("users");
});

router.get('/lp/', function(req, res, next) {
  users.find({}, {'_id':0, 'id':1, 'rep':1}).toArray(function(err, item) {
    res.send(item);
  });
});

router.get('/lp/:userid', function(req, res, next) {
  users.findOne({id: req.params.userid }, {'_id':0, 'id':1, 'rep':1}, function(err, item) {
    res.send(item);
  });
});

module.exports = router;
