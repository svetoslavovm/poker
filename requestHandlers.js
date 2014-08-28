"use strict";

var exec = require('child_process').exec;

function start( response ) {
  console.log( 'Request hadnler \'start\' was called' );
  
  var body = '<html>' +
      '<head>' +
        '<meta httt-equiv="Content Type" content="text/html; charset=UTF-8" />' +
      '</head>' +
      '<body>' +
        '<form action="/upload" method="post">' +
          '<textarea name="text" rows="20" cols="60"></textarea>' +
          '<input type="submit" value="Submit Text" />' +
        '</form>' +
      '</body>' +
    '</html>';
      
  response.writeHead(200, { 'Content-Type': 'text/html' } );
  response.end( body );
  response.end();
}

function upload( response ) {
  console.log( 'Request hadnler \'upload\' was called' );
  
  response.writeHead(200, { 'Content-Type': 'text/plain' } );
  response.end(' Hello Upload ');
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