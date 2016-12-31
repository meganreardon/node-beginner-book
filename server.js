'use strict';


// ----------------
// #7: post uploads
// ----------------

var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('Request for ', pathname, 'received.');
    route(handle, pathname, res, req);
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

exports.start = start;

// ---------------
// #6 Non-blocking
// ---------------

// var http = require('http');
// var url = require('url');
// var formidable = require('formidable');
//
// function start(route, handle) {
//   function onRequest(req, res) {
//     var pathname = url.parse(req.url).pathname;
//     console.log('Request for ', pathname, 'recieved.');
//
//     route(handle, pathname, res);
//   }
//
//   http.createServer(onRequest).listen(8888);
//   console.log('Server has started.');
// }
//
// exports.start = start;

// -------------------
// #5 Extending Router
// -------------------

// var http = require('http');
// var url = require('url');
//
// function start(route, handle) {
//   function onRequest(req, res) {
//     var pathname = url.parse(req.url).pathname;
//     console.log('Request for ', pathname, ' received.');
//
//     route(handle, pathname);
//
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World');
//     res.end;
//   }
//
//   http.createServer(onRequest).listen(8888);
//   console.log('Server has started.');
// }
//
// exports.start = start;

// ------------------
// #4 Starting Routes
// ------------------
//
// var http = require('http');
// var url = require('url');
//
// function start() {
//   function onRequest(req, res) {
//     var pathname = url.parse(req.url).pathname;
//     console.log('Request for ', pathname, ' recieved.');
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hellow World');
//     res.end();
//   }
//
//   http.createServer(onRequest).listen(8888);
//   console.log('Server has started.');
// }
//
// exports.start = start;

// -----------------
// #3 Modularization
// -----------------
//
// var http = require('http');
//
// function start() {
//   function onRequest(req, res) {
//     console.log('Request received.');
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World');
//     res.end();
//   }
//
//   http.createServer(onRequest).listen(8888);
//   console.log('Server has started');
// }
//
// exports.start = start;

// -----------------
// #2 Asynch Example
// -----------------
//
// var http = require('http');
//
// function onRequest(req, res) {
//   console.log('Request received.');
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World');
//   res.end();
// }
//
// http.createServer(onRequest).listen(8888);
//
// console.log('Server has started.');

// -------------
// #1 Intro Code
// -------------
//
// var http = require('http');
//
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
