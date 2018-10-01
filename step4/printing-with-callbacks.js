var https = require('https');

function getHTML (options, callback) {

  /* Add your code here */
  https.get(options, function (response) {
  response.setEncoding('utf8');

  var dataString = '';
  response.on('data', function (chunk) {

    dataString += chunk;
    });

  response.on('end', function() {
    callback(dataString);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

console.log(getHTML(requestOptions, printHTML));