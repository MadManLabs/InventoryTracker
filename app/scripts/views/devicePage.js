define([
	'app'
], function( app ) {
	'use strict';

	app.Views.DevicePage = Backbone.View.extend( {
		el: '.application',

		template: _.template( $( '#devicePageTemplate' ).html() ),

		render: function() {
			var expires;
			var expired;

			if ( this.model.get( 'expires' ) - moment() <= 0 ) {
				expired = this.model.get( 'expires' ).fromNow();
			}
			else {
				expires = this.model.get( 'expires' ).fromNow();
			}
			this.$el.html( this.template({ model: this.model, expires: expires, expired: expired }) );
		}
	});

	return app.Views.DevicePage;
});

