Grid.Row.Cell.Editor.Text = new Class({
   
   Extends : Grid.Row.Cell.Editor,
   
   createChild : function ( placeholder, data ) {
      return new Element( 'input', {
         type  : 'text',
         value : data
      }).inject( placeholder );
   }
});

// Register
Grid.Row.Cell.Editor.set( 'text', Grid.Row.Cell.Editor.Text );