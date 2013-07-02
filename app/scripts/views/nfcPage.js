define([
	'app'
], function( app ) {
	'use strict';

	app.Views.NFCPage = Backbone.View.extend( {
		el: '.application',

		template: _.template( $( '#NFCPageTemplate' ).html() ),

		render: function() {
			this.$el.html( this.template );
		}
	});

	return app.Views.NFCPage;
});
