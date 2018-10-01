var getHTML = require('../step5/http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var reverseString = html.split('').reverse()
console.log(reverseString.join(""));
  /* Write your code here! */

}

getHTML(requestOptions, printReverse);