"use strict";

//PDF at page 41 - to make the process non blocking ...

var server = require( './server' );
var router = require( './router' );
var requestHandlers=require( './requestHandlers' );


var handle = {};


handle[ '/' ] = requestHandlers.start;
handle[ '/start' ] = requestHandlers.start;
handle[ '/upload' ] = requestHandlers.upload;
handle[ 'NotFound' ] = requestHandlers.NotFound;

server.start(router.route, handle);