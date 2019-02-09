var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

var route = require('./server/route');
var db = require('./server/dataservice')

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const $PORT = process.env.port || 8080;

//To use static assets directories
app.use(express.static('dist'));

app.get('/', function(req,res){

    fs.readFile('dist/index.html', 'utf8', function(err,content){
        res.send(content);
    })
})

app.use('/route', route);

app.listen($PORT, function(){
    console.log('Server listening on port ' + $PORT);
})
