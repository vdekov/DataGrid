Grid.Row.Cell.Editor = new Class({
   
   Extends : Grid.Element,
   
   createChild : function ( placeholder, data ) {
      return placeholder.appendChild( document.createTextNode( data ) );
   }
   
});

// Create a registry where each editor construct can register itself
// Each editor constructor registers with an ID
// Registry returns the constructor by the ID
Grid.Row.Cell.Editor.registry = {
   'base' : Grid.Row.Cell.Editor
};

Grid.Row.Cell.Editor.get = function ( id ) {
   return this.registry[ id ];
};

Grid.Row.Cell.Editor.set = function ( id, constructor ) {
   this.registry[ id ] = constructor;
}