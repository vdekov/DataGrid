var express = require('express');
var body_parser = require('body-parser');
var fs = require('fs');
var path = require('path');

// create server via ExpressJS
var server = express();
server.use( body_parser.json() );
server.use( body_parser.urlencoded({
   extended : true
}) );

// handling requests via GET
server.get( '/', function ( request, response ) {
   response.send( '<h1>Hello, World</h1>' );
});

// handling requests via POST
server.post( '/', function ( request, response) {
   response.send( request.body.foo );
});

// start the server
server.listen( 8080 );