var express = require('express');
var fs = require('fs');
var rm = require('./resourcemanager');
var router = express.Router();

router.get('/', function (req, res){
  console.log('request for storage received');
  var id = req.query.id;
  //var report = req.query.report;

  // Do stuff with query result
  var s = rm.getReadStream(id);
  s.on('open', function () {
    res.set('Content-Type', 'image/jpeg');
    s.pipe(res);
  });
  s.on('error', function () {
    res.set('Content-Type', 'text/plain');
    res.status(404).end('Not found');
  });
  //res.json(json); // send results

});

//Export module
module.exports = router;
