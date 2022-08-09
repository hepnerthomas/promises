/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');
// const readline = require('readline');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf-8', (err, fileData) => {
    if (err) {
      // throw ('could not read the file data.');
      callback(err, null);
    } else {
      // console.log(fileData);
      // console.log(fileData[0].toString());
      let lineArray = fileData.split('\n');
      // console.log(lineArray[0]);
      callback(null, lineArray[0]);
      // callback(err, null)
      // console.log(fileData);
    }


  // const readLine = readline.createInterface({input: filePath})
  });
  // readLine.close();


};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
