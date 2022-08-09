/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  var firstLinePromise = new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, fileData) => {
      if (err) {
        reject(err);
      } else {
        let lineArray = fileData.split('\n');
        resolve(lineArray[0]);
      }
    });
  });
  return firstLinePromise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  var statusCodePromise = new Promise((resolve, reject) => {
    request('get', url, (err, resp) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp.statusCode);
      }
    });
  });
  return statusCodePromise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
