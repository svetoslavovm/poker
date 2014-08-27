"use strict";

var exec = require('child_process').exec;

function start( response ) {
  console.log( 'Request hadnler \'start\' was called' );
  
  exec( 'find /',
      { timeout: 10000, maxBuffer: 20000*1024 },
      function( error, stdout, stderr ) {
        response.writeHead(200, { 'Content-Type': 'text/plain' } );
        response.write(stdout);
        response.end();
      });
}

function upload( response ) {
  console.log( 'Request hadnler \'upload\' was called' );
  
  response.writeHead(200, { 'Content-Type': 'text/plain' } );
  response.end(' WTF ');
  response.end();
}

function NotFound( pathname, response ) {
  console.log( 'No request handler found for ' + pathname );
  response.writeHead( 404, { 'Content-Type': 'text/plain' } );
  response.write( '404 Not found' );
  response.end();
}

exports.start = start;
exports.upload = upload;
exports.NotFound = NotFound;