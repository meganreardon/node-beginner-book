'use strict';

var http = require('http');

function onRequest(req, res) {
  console.log('Request received.');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();
}

http.createServer(onRequest).listen(8888);

console.log('Server has started.');

// -------------
// #1 Intro Code
// -------------

// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World');
//   res.end(0);
// }).listen(8888);
//
// function say(word) {
//   console.log(word);
// }
//
// function execute(someFunction, value) {
//   someFunction(value);
// }
//
// execute(say, 'Hello');
//
// execute(function(word){ console.log(word) }, 'Hello');
