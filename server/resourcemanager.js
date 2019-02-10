var crypto = require('crypto');
var fs = require('fs');

var DIR = './storage/';

var md5sum = crypto.createHash('md5');

var rm = exports = module.exports = {};

rm.test = function(x, y) {
  console.log(x);
  console.log(y);
}
// Exemple objet :
rm.put = function(object, buffer, ext) {

  md5sum.update(object);

  var filename = md5sum.digest('hex');
  var path = DIR + filename + ext;

  fs.open(path, 'w', function(err, fd) {
    if (err) {
      throw 'error opening file: ' + err;
    }

    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
      if (err) throw 'error writing file: ' + err;
      fs.close(fd, function() {
        console.log('file written');
        return filename + ext;
      })
    });
  });

}

rm.get = function(fileid) {
  var path = DIR + fileid + '.jpg';

  fs.readFile(path, function (err, data) {
    if (err) throw err;
    return data;
  });
}

rm.getReadStream = function(fileid) {
  var path = DIR + fileid + '.jpg';

  return fs.createReadStream(path);
}
