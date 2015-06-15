Grid.Element = new Class({
   
   Extends : Events,
   
   tag_name       : 'div',
   placeholder    : null,
   element        : null,
   child_element  : null,
   child_elements : [],
   data           : null,
   columns        : null,
   
   initialize : function ( placeholder, data, columns ) {
      // Make sure that the class is abstract
      if ( this.$constructor == Grid.Element ) {
         throw new Error( 'The class Grid.Element is abstract and should not be instantiated' );   
      }
      
      this.data    = data;
      this.columns = columns;
      this.element = this.create( data ).inject( placeholder );
      this.setData( data );
   },
   
   getData : function () {
      return this.data;
   },
   
   setData : function ( data ) {
      this.data = data;
   },
   
   create : function ( data ) {
      var element = new Element( this.tag_name );
      
      if ( typeof data == 'object' ) {
         // Create new instance of the "child_constructor" and push it into
         // the "child_elements" object
         for ( var name in data ) {
            if ( data.hasOwnProperty( name ) ) {
               this.child_elements[ name ] = this.createChild(
                  element,
                  data[ name ],
                  this.getEditorType( name )
               );
            }
         }
      } else {
         this.child_element = this.createChild( element, data, this.columns );
      }
      
      return element;
   }.protect(),
   
   getEditorType : function ( column_id ) {
      for ( var i = 0, l = this.columns.length; i < l; i++ ) {
         if ( column_id == this.columns[ i ].id ) {
            return this.columns[ i ].editor;
         }
      }
      return 'base';
   },
   
   createChild : function () {}
   
});