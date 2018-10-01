var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

    /* Add your code here */

  https.get(requestOptions, function (response) {
  response.setEncoding('utf8');

  var dataString = '';
  response.on('data', function (chunk) {

    dataString += chunk;
    });

  response.on('end', function() {
    console.log(dataString);
    });
  });
};



console.log(getAndPrintHTML());

