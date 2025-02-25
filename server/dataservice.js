var mysql = require('mysql');
var fs = require('fs');
const Marchant = require('./models/marchant');
const Address = require('./models/address');
const User = require('./models/user');
const Farm = require('./models/farm');

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
};

db.getMarchant = function(id, callback) {
  if (id) {
    connection.query(`SELECT * FROM Marchant WHERE id =${id}`, function(err, results, fields) {
      // TODO: Handle error
      let json = results[0];
      let marchant = new Marchant();
      marchant.id = json.id;
      marchant.name = json.name;
      marchant.email = json.email;
      marchant.phone = json.phone;
      marchant.rating = json.rating;
      db.getAddress(json.id, function (err, address) {
        marchant.address = address;
        callback(null, marchant);
      });

      callback(new Error("id is null"));
    });

  } else {
    // TODO: Return an error
  }

};

db.getFarm = function(id, callback) {
  if (id) {
    connection.query(`SELECT * FROM Farm WHERE id =${id}`, function(err, results, fields) {
      // TODO: Handle error
      let json = results[0];
      if (json) {
        let farm = new Farm();
        farm.id = json.id;
        farm.rating = json.rating;
        farm.name = json.name;

        db.getAddress(json.id, function (err, address) {
          farm.address = address;
          callback(null, farm);
        });
      } else {
        callback(null, null);
      }



    });

  } else {
    callback(new Error("id is null"));
  }

};

db.getAddress = function(id, callback) {
  if (id) {
    connection.query(`SELECT * FROM Address WHERE id =${id}`, function(err, results, fields) {
      if (err) {
        console.log("Database error finding address");
        console.log(err.stack);
        callback(err);
      } else {
        let json = results[0];
        let address = new Address();
        address.street = json.street;
        address.city = json.city;
        address.state = json.state;
        address.postalcode = json.postalcode;
        address.country = json.country;
        address.latitude = json.latitude;
        address.longitude = json.longitude;
        callback(null, address);
      }
    });
  } else {
    callback(new Error("id is null"));
  }
};

db.authenticateUser = function(username, password, callback) {
  connection.query(`CALL authenticate(?,?)`, [username, password], function(err, results, fields) {

    if (err) {
      console.log(err.message);
      callback(err);
    }
    var user = new User();
    let json = results[0][0];
    if (json) {
      user.id = json.id;
      user.username = json.username;
      user.firstName = json.firstname;
      user.lastName = json.lastname;
      user.email = json.email;
      db.getAddress(json.address_id, function(err, address) {
        user.address = address;
        callback(null, user);
      });
    } else {
      callback(null, null);
    }
  });
};

db.createUser = function(user, callback) {
  db.connection.query('CALL addClient(?,?,?,?,?)',
    [user.username, user.password, user.firstName, user.lastName, user.email],
    function(err, results, fields) {
    if (err) {
      console.log(err.message);
      callback(err);
    } else {
      callback(null);
    }
    });
};


