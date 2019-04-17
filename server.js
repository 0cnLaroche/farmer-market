var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

//Local modules
var storage = require('./server/storage');
var api = require('./server/api');
var rm = require('./server/resourcemanager');

const $PORT = process.env.port || 8080;

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/
//To use static assets directories
//app.use(express.static('dist'));

app.get('/', function(req,res){

    fs.readFile('dist/index.html', 'utf8', function(err,content){
        res.send(content);
    })
});

// Set router routes
app.use('/storage', storage);
app.use('/api', api);
app.use(express.static('dist'));

app.listen($PORT, function(){
    console.log('Server listening on port ' + $PORT);
});
