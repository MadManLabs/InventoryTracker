define([
	'app',
], function( app ) {
	'use strict';

	app.Views.HomeNavigation = Backbone.View.extend( {
		el: '.homeNavigation',

		template: _.template( $( '#homeNavigationTemplate' ).html() ),

		events: {
			'click .homeButton'	: 'goHome'
		},

		render: function() {
			this.$el.html( this.template );
		},

		goHome: function() {
			app.Router.router.navigate( 'launch', { trigger: true });
		}
	});

	return app.Views.HomeNavigation;
});

