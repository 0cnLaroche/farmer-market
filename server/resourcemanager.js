let crypto = require('crypto');
let fs = require('fs');

let DIR = './storage/';

let md5sum = crypto.createHash('md5');

let rm = exports = module.exports = {};

rm.test = function(x, y) {
  console.log(x);
  console.log(y);
};
// Exemple objet :
rm.put = function(object, buffer, ext) {

  md5sum.update(object);

  let filename = md5sum.digest('hex');
  let path = DIR + filename + ext;

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
  let path = DIR + fileid + '.jpg';

  fs.readFile(path, function (err, data) {
    if (err) throw err;
    return data;
  });
};

rm.getReadStream = function(fileid) {
  var path = DIR + fileid + '.jpg';

  return fs.createReadStream(path);
};
