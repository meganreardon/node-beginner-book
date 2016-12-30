'use strict';

// ---------------
// #2 Non-blocking
// ---------------

function route(handle, pathname, res) {
  console.log('About to route a request for', pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](res);
  } else {
    console.log('No request handler fournd for ', pathname);
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not Found');
    res.end();
  }
}

exports.route = route;

// ------------------------
// #1 Routing and responses
// ------------------------

// function route(handle, pathname) {
//   console.log('About to route a request for ', pathname);
//   if (typeof handle[pathname] === 'function') {
//     handle[pathname]();
//   } else {
//     console.log('No request handler found for ', pathname);
//   }
// }

// was orig
// function route(pathname) {
//   console.log('About to route a request for ', pathname);
// }

// exports.route = route;
