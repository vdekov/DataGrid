Grid = new Class({
   
   Extends : Events,
   
   placeholder : null,
   table       : null,
   data        : [],
   rows        : [],
   columns     : [],
   
   initialize : function ( placeholder, columns, data ) {
      this.placeholder = document.id( placeholder );
      this.columns     = columns;
      this.create( this.placeholder );
      this.loadData( data );
   },
   
   loadData : function ( data ) {
      this.data = data;
      
      data.forEach( function ( row_data ) {
         this.rows.push( new Grid.Row( this.table, row_data, this.columns ) );
      }, this);
   },
   
   create : function ( placeholder ) {
      // Create the <table> element that will hold the whole grid
      // and inject it into the placeholder
      this.table = new Element( 'table', {
         border : 1
      }).inject( placeholder );
   }.protect()
   
});