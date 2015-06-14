var express = require('express');
var body_parser = require('body-parser');
var fs = require('fs');
var path = require('path');
var api = require('./api.js');

// create server via ExpressJS
var server = express();
server.use( body_parser.json() );      // to support JSON-encoded bodies
server.use( body_parser.urlencoded({   // to support URL-encoded bodies
   extended : true
}) );

// handling requests via GET
server.use( express.static( 'public_html' ) );

// handling requests via POST
server.post( '/', function ( request, response ) {
   // Prepare API parameters
   var params = {
      row_index   : request.body.row_index,
      row_indexes : JSON.parse( request.body.row_indexes || null ),
      cell_data   : JSON.parse( request.body.cell_data   || null ),
      cell_id     : request.body.cell_id,
      value       : request.body.value
   };
   
   response.send(
      // return the JSON stringified API result as response
      JSON.stringify( api.execute( request.body.cmd || '', params ) )
   );
});

// start the server
server.listen( 8080 );