var express = require('express');
var fs = require('fs');
var router = express.Router();

// Default 
router.get('/', function (req, res){

  fs.readFile("./route.html", 'utf8', function(err,content){
        res.send(content);
    })
})

router.get('/request', function (req, res){

  var id = req.query.id;
  var report = req.query.report;

  // Do stuff with query result

  res.json(json); // send results

});

//Export module
module.exports = router
