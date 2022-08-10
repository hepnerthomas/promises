/**
 * Create the promise returning `Async` suffixed versions of the functions below,
 * Promisify them if you can, otherwise roll your own promise returning function
 */

var fs = require('fs');
var request = require('needle');
var crypto = require('crypto');
var Promise = require('bluebird');
var path = require('path');

// (1) Asyncronous HTTP request
var getGitHubProfile = function (user, callback) {
  var url = 'https://api.github.com/users/' + user;
  var options = {
    headers: { 'User-Agent': 'request' },
  };

  request.get(url, options, function (err, res, body) {
    if (err) {
      callback(err, null);
    } else if (body.message) {
      callback(
        new Error('Failed to get GitHub profile: ' + body.message),
        null
      );
    } else {
      callback(null, body);
    }
  });
};

// var getGitHubProfileAsync; // TODO
// var getGitHubProfileAsync = function(user) {
//   var url = 'https://api.github.com/users/' + user;
//   var options = {
//     headers: { 'User-Agent': 'request' },
//   };
//   var gitHubProfilePromise = new Promise((resolve, reject) => {
//     request.get(url, options, function (err, res, body) {
//       if (err) {
//         reject(err);
//       } else if (body.message) {
//         reject(new Error('Failed to get GitHub profile: ' + body.message));
//       } else {
//         resolve(body);
//       }
//     });
//   });
//   return gitHubProfilePromise;
// }

var getGitHubProfileAsync = Promise.promisify(getGitHubProfile);

// (2) Asyncronous token generation
var generateRandomToken = function(callback) {
  crypto.randomBytes(20, function(err, buffer) {
    if (err) { return callback(err, null); }
    callback(null, buffer.toString('hex'));
  });
};

// var generateRandomTokenAsync; // TODO
// var generateRandomTokenAsync = function() {
//   var randomTokenPromise = new Promise((resolve, reject) => {
//     crypto.randomBytes(20, function(err, buffer) {
//       if (err) { reject(err) }
//       resolve(buffer.toString('hex'));
//     });
//   });
//   return randomTokenPromise;
// }

var generateRandomTokenAsync = Promise.promisify(generateRandomToken);

// (3) Asyncronous file manipulation
var readFileAndMakeItFunny = function(filePath, callback) {
  fs.readFile(filePath, 'utf8', function(err, file) {
    if (err) { return callback(err); }

    var funnyFile = file.split('\n')
      .map(function(line) {
        return line + ' lol';
      })
      .join('\n');

    callback(null, funnyFile);
  });
};

// var readFileAndMakeItFunnyAsync; // TODO
// var readFileAndMakeItFunnyAsync = function(filePath) {
//   var funnyFilePromise = new Promise((resolve, reject) => {
//     fs.readFile(filePath, 'utf8', function(err, file) {
//       if (err) { reject(err); }

//       var funnyFile = file.split('\n')
//         .map(function(line) {
//           return line + ' lol';
//         })
//         .join('\n');

//       resolve(funnyFile);
//     });
//   });
//   return funnyFilePromise;

// }

// console.log(path.join(__dirname, 'promisification.js'));
var readFileAndMakeItFunnyAsync = Promise.promisify(readFileAndMakeItFunny);
// Promise.promisifyAll(require(path.join(__dirname, 'promisification.js'))); //'./promisification.js');

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getGitHubProfileAsync: getGitHubProfileAsync,
  generateRandomTokenAsync: generateRandomTokenAsync,
  readFileAndMakeItFunnyAsync: readFileAndMakeItFunnyAsync
};
