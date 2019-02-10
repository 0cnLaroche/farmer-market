var express = require('express');
var fs = require('fs');
var db = require('./dataservice');
var router = express.Router();

router.get('/products', function(req, res) {

  console.log('request for products received');

  db.connection.query('SELECT * FROM farmer.Products;', function(err, results, fields) {
    if (err) {
      //console.error('Query error: ' + err.stack);
      res.set('Content-Type', 'text/plain');
      res.status(500).end('Database error');
      return;
    }

    let json = results;
    // mysql module doesn't parse images. Need to do it manually

    for (let i = 0; i < json.length; i++) {
      json[i].images = JSON.parse(json[i].images.replace('/',''));
    }

    res.header("Access-Control-Allow-Origin", "*"); // TODO: Remove for production

    res.json(json); // send results
  });
});

//Export module
module.exports = router;
