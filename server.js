'use strict';

var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end(0);
}).listen(8888);

function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}

execute(say, 'Hello');

execute(function(word){ console.log(word) }, 'Hello');
