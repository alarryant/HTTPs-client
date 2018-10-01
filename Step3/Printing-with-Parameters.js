var https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */

  https.get(options, function (response) {
  response.setEncoding('utf8');

  var dataString = '';
  response.on('data', function (chunk) {

    dataString += chunk;
    });

  response.on('end', function() {
    console.log(dataString);
    });
  });
}

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

console.log(getAndPrintHTML(requestOptions))