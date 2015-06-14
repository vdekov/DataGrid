Grid.Row.Cell = new Class({
   
   Extends : Grid.Element,
   
   tag_name : 'td',
   
   createChild : function ( placeholder, data ) {
      return new Grid.Row.Cell.Editor( placeholder, data );
   }
   
});