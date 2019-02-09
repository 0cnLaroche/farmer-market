var mysql = require('mysql');
var fs = require('fs');
var connection = mysql.createConnection({
  host: '35.183.115.194',
  user: 'farmer-market.admin',
  password: 'Bmw325xi()',
  database: 'farmer'
});

connection.connect(function(err){
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to database as Id ' + connection.threadId);
});

connection.query('SELECT 1;', function(err,results,fields){

  // Do something with results
})

// Exemple pour lire des requêtes en fichiers .sql
var getData = function(id, options, callback){

  var query = options.query.name;
  var param = options.query.param;

    fs.readFile('sql/' + query + '.sql', 'utf8', function(err, content){
      if (err){
        console.error(err.stack);
      } else {
        var sql = mysql.format(content, param);
        connection.query(sql, function(err, results, fields) {
          if (err) {
            callback(err, null);
          } else {
            callback(null, results)
          }
        })
      }
    })
}

module.exports = getData;
