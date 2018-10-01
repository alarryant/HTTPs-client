

module.exports = function getHTML (options, callback) {
    /* Your code here */
var https = require('https');

var dataString = '';

  https.get(options, function (response) {
  response.setEncoding('utf8');

  response.on('data', function (chunk) {
    dataString += chunk;
    });

  response.on('end', function() {
    callback(dataString);
    });
  })
}