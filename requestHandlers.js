'use strict';

// ----------------
// #4: Non-blocking
// ----------------

var exec = require('child_process').exec;

function start(res) {
  console.log('Request handler "start" was called.');

  // replaced end of non-blocking example
  // exec('ls -lah', function (error, stdout, stderr) {
  //   res.writeHead(200, {'Content-Type': 'text/plain'});
  //   res.write(stdout);
  //   res.end();
  // });

  exec('find /',
    { timeout: 10000, maxBuffer: 20000*1024 }, function (error, stdout, stderr) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(stdout);
      res.end();
    });
}

function upload(res) {
  console.log('Request handler "upload" was called.');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello Upload');
  res.end();
}

exports.start = start;
exports.upload = upload;

// -------------------------
// #3: handlers and response
// -------------------------
//
// var exec = require('child_process').exec;
//
// function start() {
//   console.log('Request handler "start" was called.');
//   var content = 'empty';
//
//   exec('ls -lah', function (error, stdout, stderr) {
//     content = stdout;
//   });
//
//   return content;
// }
//
// function upload() {
//   console.log('Request handler "upload" was called.');
//   return 'Hello Upload.';
// }
//
// exports.start = start;
// exports.upload = upload;

// --------------------
// #2: blocking example
// --------------------
//
// function start() {
//   console.log('Request handler "start" was called');
//
//   function sleep(milliSeconds) {
//     var startTime = new Date().getTime();
//     while (new Date().getTime() < startTime + milliSeconds);
//   }
//
//   sleep(10000);
//   return 'Hello Start.';
// }
//
// function upload() {
//   console.log('Request handler "upload" was called.');
//   return 'Hello Upload';
// }
//
// exports.start = start;
// exports.upload = upload;

// ------------------
// #1: basic handling
// ------------------
//
// function start() {
//   console.log('Request handler "start" was called.');
// }
//
// function upload() {
//   console.log('Request handler "upload" was called.');
// }
//
// exports.start = start;
// exports.upload = upload;
