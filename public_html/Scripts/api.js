API = {
   /**
    * @method execute
    * @public
    * 
    * Executes POST request to the server API
    * 
    * @param  {String}   cmd      API command
    * @param  {Object}   params   API parameters
    * @param  {Function} callback Callback function to be executed on completion
    */
   execute : function( cmd, params, callback ) {
      var data = Object.append({
         cmd   : cmd    // merge the command with other parameters
      }, params);
      
      // Make sure that each parameter is a string or a JSON string
      for ( var name in params ) {
         if ( data.hasOwnProperty( name ) && typeof data[ name ] == 'object' ) {
            //JSON.encode is a MooTools method that converts JS Object to a JSON string
            data[ name ] = JSON.encode( data[ name ] );
         }
      }
      
      new Request.JSON({
         url         : '/',
         method      : 'POST',
         data        : data,
         onSuccess   : callback,
         onError     : function ( message ) {
            callback({
               success : false,
               message : message,
               data    : {}
            });
         }
      }).send();
   }
}