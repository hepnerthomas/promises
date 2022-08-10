/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var {getGitHubProfileAsync} = require('./promisification.js');
var {pluckFirstLineFromFileAsync} = require('./promiseConstructor.js');


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  // (1) reads a GitHub username from a `readFilePath`
  return pluckFirstLineFromFileAsync(readFilePath)
    .then((user) => getGitHubProfileAsync(user))
    .then((body) => writeBodyToPath(body, writeFilePath))
};

var writeBodyToPath = function(body, writeFilePath) {
  return new Promise();
}
    // .then(function(username) {
    //   if (username === undefined) {
    //     throw (new Error('user could not be found on GitHub!'));
    //   } else {
    //     // (2) then, sends a request to the GitHub API for the user's profile
    //     return getGitHubProfileAsync(username);
    //       // .then(...)
    //         // return fs.writeFile()
    //   }

    // });
    // .then
    // .then((username) => user)
  //
    // .then()



  // (3) then, writes the JSON response of the API to `writeFilePath`


// var readGitHubUserName = function(readFilePath) {
//   var gitHubUserName = new Promise((resolve, reject) => {

//   });
//   return gitHubUserName;
// }

// var writeJSONToPath = function(userData) {
//   var
// }

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
