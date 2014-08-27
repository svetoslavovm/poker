"use strict";

function route(handle, pathname, response) {
  console.log('About to route a request for ' + pathname);
  
  if ( typeof handle[ pathname ] === 'function' ) {
    return handle[ pathname ]( response );
    
  } else {
    return handle[ 'NotFound' ]( pathname, response );
  }
  
}

exports.route = route;