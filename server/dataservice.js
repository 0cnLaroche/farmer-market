var mysql = require('mysql');
var fs = require('fs');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'iitbchart',
  password: 'P@$$w0rd',
  database: 'costing'
});

connection.connect(function(err){
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to database as Id ' + connection.threadId);
});

connection.query('SELECT ID, Name FROM ProjectDefinition ORDER BY Name;', function(err,results,fields){
  // Do something with results
})

// Exemple pour lire des requêtes en fichiers .sql
var getdata = function(id, options, callback){

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
