/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');
// const readline = require('readline');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', (err, fileData) => {
    if (err) {
      callback(err, null);
    } else {
      let lineArray = fileData.split('\n');
      callback(null, lineArray[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request('get', url, (err, resp) => {
    if (err) {
        callback(err, null);
    } else {
      callback(err, resp.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
