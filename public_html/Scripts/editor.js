Grid.Row.Cell.Editor = new Class({
   
   Extends : Grid.Element,
   
   createChild : function ( placeholder, data ) {
      return placeholder.appendChild( document.createTextNode( data ) );
   }
   
});