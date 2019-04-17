var express = require('express');
var fs = require('fs');
var db = require('./dataservice');
var router = express.Router();

router.get('/products', function(req, res) {

  db.connection.query('CALL getProducts();', function(err, results, fields) {
    if (err) {
      res.set('Content-Type', 'text/plain');
      res.status(500).end('Database error');
      return;
    }
    let json = results[0];
    // mysql module doesn't parse images. Need to do it manually

    for (let i = 0; i < json.length; i++) {
      json[i].images = JSON.parse(json[i].images.replace('/',''));
    }
    res.header("Access-Control-Allow-Origin", "*"); // TODO: Remove for production
    res.json(json); // send results
  });
});

router.post('/users/authenticate', function(req, res) {
  if (req.body.username && req.body.password) {
    console.log("received authentification request for " + req.body.username);
    db.authenticateUser(req.body.username, req.body.password, function(err, user) {
      if (err) {
        res.set('Content-Type', 'text/plain');
        res.status(500).end('Database error');
        return;
      }
      if (user == null) {
        res.status(401).end('Unauthorized');
      } else {
        res.header("Access-Control-Allow-Origin", "*"); // TODO: Remove for production
        res.json(user); // send results
      }
    });
  }
});

router.post('/users/register', function(req, res) {
  if (req.body) {
    let user = req.body;
    console.log("Received registration request for " + user.username);
    db.createUser(user, function(err) {
      console.log(user.username + " is registered");
      //res.set('Content-Type', 'text/plain');
      res.header("Access-Control-Allow-Origin", "*"); // TODO: Remove for production
      res.status(201).end(user.username + " is registered");
    });
  }
});

router.get('/marchant', function (req, res)  {
  db.getMarchant(req.query.id, function (err, marchant) {
    res.header("Access-Control-Allow-Origin", "*"); // TODO: Remove for production
    res.json(marchant);
  });

});

router.get('/farm', function (req, res)  {
  db.getFarm(req.query.id, function (err, farm) {
    if (err) {
      res.set('Content-Type', 'text/plain');
      res.status(500).end('Database error');
      return;
    }
    if (farm == null) {
      res.status(401).end('Unauthorized');
    } else {
      res.header("Access-Control-Allow-Origin", "*"); // TODO: Remove for production
      res.json(farm);
    }

  });

});

//Export module
module.exports = router;
