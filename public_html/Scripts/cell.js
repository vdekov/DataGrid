Grid.Row.Cell = new Class({
   
   Extends : Grid.Element,
   
   tag_name : 'td',
   
   createChild : function ( placeholder, data, editor ) {
      return new (Grid.Row.Cell.Editor.get( editor ))( placeholder, data );
   }
   
});