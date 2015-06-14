Grid.Row = new Class({
   
   Extends : Grid.Element,
   
   tag_name : 'tr',
   
   createChild : function ( placeholder, data ) {
      return new Grid.Row.Cell( placeholder, data );
   }
   
});