var mysql = require('mysql');
var fs = require('fs');

var db = exports = module.exports = {};

var connection = mysql.createConnection({
  host: '35.183.115.194',
  user: 'farmer-market.admin',
  password: 'Bmw325xi()',
  database: 'farmer'
});

db.connection = connection;

db.connection.connect(function(err){
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to database as Id ' + connection.threadId);
});

/*db.query = function(sql) {
  var json;
  connection.query(sql, function(err, results, fields) {
    if (err) {
      console.error('Query error: ' + err.stack);
      return;
    }
    db.query.json = results;
  })
  console.log(db.query.json);
  return db.query.json;
}*/

// Exemple pour lire des requêtes en fichiers .sql
db.getData = function(id, options, callback){

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
