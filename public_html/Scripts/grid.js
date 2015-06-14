Grid = new Class({
   
   placeholder : null,
   table       : null,
   data        : [],
   rows        : [],
   
   initialize : function ( placeholder, data ) {
      this.placeholder = document.id( placeholder );
      this.create( this.placeholder );
      this.loadData( data );
   },
   
   loadData : function ( data ) {
      this.data = data;
      
      data.forEach( function ( row_data ) {
         this.rows.push( new Grid.Row( this.table, row_data ) );
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