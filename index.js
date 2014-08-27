"use strict";

//PDF at page 37

var server = require( './server' );
var router = require( './router' );
var requestHandlers=require( './requestHandlers' );


var handle = {};


handle[ '/' ] = requestHandlers.start;
handle[ '/start' ] = requestHandlers.start;
handle[ '/upload' ] = requestHandlers.upload;
handle[ 'NotFound' ] = requestHandlers.NotFound;

server.start(router.route, handle);