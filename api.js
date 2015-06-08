var mootools = require('mootools');
var fs = require('fs');

var API = new Class({
   
   initialize : function ( db_file ) {
      this.db_file = db_file || 'data.json';
      this.refresh();
   },
   
   refresh : function () {
      this.data = JSON.parse( fs.readFileSync( this.db_file ) );
   }.protect(),
   
   execute : function ( command, params ) {
      var method = command.replace( /_([a-z]?)/g, function ( all, a ) {
         return a.toUpperCase();
      });
      
      if( ! this[ method ] ) {
         return this.error( 'Command ' + command + ' does not exist');
      }
      
      params = params || {};
      
      return this[ method ](
         params.row_indexes || params.row_index || params.cell_data,
         params.cell_id,
         params.value
      );
   },
   
   success : function ( message, data ) {
      return {
         success  : true,
         message  : message || 'Successfully executed query',
         data     : data || {}
      }
   }.protect(),
   
   error : function ( message ) {
      return {
         success  : false,
         message  : message,
         data     : {}
      }
   }.protect(),
   
   addRow : function ( cell_data ) {
      cell_data = typeof cell_data = 'string' ? JSON.parse( cell_data ) : cell_data;
      var row_index = this.data.push( cell_data || {} ) - 1;
      for ( var name in this.data[ row_index ] ) {
         this.data[ row_index ][ name ] = String( this.data[ row_index ][ name] );
      }
      this.save();
      return this.success( 'Successfully added new row', { row_index : row_index } );
   }.protect(),
   
   updateRow : function ( row_index, cell_data ) {
      if ( ! this.data[ row_index ] ) {
         return this.error( 'Row with index ' + row_index + ' does not exist' );
      }
      cell_data = typeof cell_data = 'string' ? JSON.parse( cell_data ) : cell_data;
      for ( var name in cell_data ) {
         this.setCellValue( row_index, name, cell_data[ name ] );
      }
      this.save();
      return this.success( 'Successfully updated the row' );
   }.protect(),
   
   getData : function () {
      return this.success( '', this.data );
   }.protect(),
   
   getRows : function ( row_indexes ) {
      return this.success( '', [].concat( row_indexes || [] ).map( function ( index ) {
         return this.data[ index ];
      }, this ) );
   }.protect()
});

module.exports = new API();