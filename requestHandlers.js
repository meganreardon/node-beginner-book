'use strict';

// --------------------
// #6b: uploads further
// --------------------

var querystring = require('querystring'),
  fs = require('fs'),
  formidable = require('formidable');

function start(res) {
  console.log('Request handler "start" was called.');

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+ 'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+ 'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+ '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(body);
  res.end();
}

function upload(res, req) {
  console.log('Request handler "upload" was called.');

  var form = new formidable.IncomingForm();
  console.log('About to parse.');
  form.parse(req, function(error, fields, files) {
    console.log('Parsing done.');

    // possible error on windows machines
    fs.rename(files.upload.path, '/tmp/test.png', function(error) {
      if (error) {
        fs.unlink('/tmp/test.png');
        fs.rename(files.upload.path, '/tmp/test.png');
      }
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('received image:<br/>');
    res.write('<img src="/show" />');
  });
}

function show(res) {
  console.log('Request handler "show" was called.');
  res.writeHead(200, {'Content-Type': 'image/png'});
  fs.createReadStream('/tmp/test.png').pipe(res);
}

exports.start = start;
exports.upload = upload;
exports.show = show;

// -----------
// #6: uploads
// -----------

var querystring = require('querystring'),
  fs = require('fs');

function start(res, postData) {
  console.log('Request handler "start" was called.');

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(body);
  res.end();
}

function upload(res, postData) {
  console.log('Request handler "upload" was called.');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('You\'ve send the text: ' +
  querystring.parse(postData).text);
  res.end();
}

function show(res) {
  console.log('Request handler "show" was called.');
  res.writeHead(200, {'Content-Type': 'image/png'});
  fs.createReadStream('/tmp/test.png').pipe(res);
}

exports.start = start;
exports.upload = upload;
exports.show = show;

// ----------------
// #5: POST request
// ----------------

// var querystring = require('querystring');
//
// function start(res) {
//   console.log('Request handler "start" was called.');
//
//   var body = '<html>'+
//     '<head>'+
//     '<meta http-equiv="Content-Type" content="text/html; '+
//     'charset=UTF-8" />'+
//     '</head>'+
//     '<body>'+
//     '<form action="/upload" method="post">'+
//     '<textarea name="text" rows="20" cols="60"></textarea>'+
//     '<input type="submit" value="Submit text" />'+
//     '</form>'+
//     '</body>'+
//     '</html>';
//
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(body);
//   res.end();
// }
//
// function upload(res, postData) {
//   console.log('Request handler "upload" was called.');
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('You\'ve send the text: ' +
//   querystring.parse(postData).text);
//   res.end();
// }
//
// exports.start = start;
// exports.upload = upload;

// ----------------
// #4: Non-blocking
// ----------------

// var exec = require('child_process').exec;
//
// function start(res) {
//   console.log('Request handler "start" was called.');
//
//   // replaced end of non-blocking example
//   // exec('ls -lah', function (error, stdout, stderr) {
//   //   res.writeHead(200, {'Content-Type': 'text/plain'});
//   //   res.write(stdout);
//   //   res.end();
//   // });
//
//   exec('find /',
//     { timeout: 10000, maxBuffer: 20000*1024 }, function (error, stdout, stderr) {
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//       res.write(stdout);
//       res.end();
//     });
// }
//
// function upload(res) {
//   console.log('Request handler "upload" was called.');
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello Upload');
//   res.end();
// }
//
// exports.start = start;
// exports.upload = upload;

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
