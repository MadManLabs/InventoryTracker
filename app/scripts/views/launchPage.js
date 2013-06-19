define([
	'app'
], function( app ) {
	'use strict';

	app.Views.LaunchPage = Backbone.View.extend( {
		el: '.application',

		template: _.template( $( '#launchPageTemplate' ).html() ),

		events: {
			'click .scan'	: 'scan',
			'click .lookUp'	: 'lookUp',
			'click .browse'	: 'browse'
		},

		render: function() {
			var data = { cordova: app.cordova };
			this.$el.html( this.template( data ) );
		},

		scan: function() {
			app.Router.router.navigate( 'scan', { trigger: true });
		},

		lookUp: function() {
			app.Router.router.navigate( 'lookUp', { trigger: true });
		},

		browse: function() {
			app.Router.router.navigate( 'browse', { trigger: true });
		}
	});

	return app.Views.LaunchPage;
});
