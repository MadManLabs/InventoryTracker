define([
	'app'
], function( app ) {
	'use strict';

	app.Views.LookUpPage = Backbone.View.extend( {
		el: '.application',

		template: _.template( $( '#lookUpPageTemplate' ).html() ),

		events: {
			'click .submitLookUp'	: 'submitLookUp',
			'focus .serialInput'	: 'hideErrorMessage'
		},

		render: function() {
			this.$el.html( this.template );
		},

		submitLookUp: function() {
			var target = $( '.serialInput' ).val();
			var serialNumbers = app.Collections.devices.pluck( 'serial' );

			if( _.contains( serialNumbers, target ) ) {
				app.Router.router.navigate( 'device/' + target, { trigger: true } );
			}
			else {
				$( '.lookUpError' ).fadeIn();
			}
		},

		hideErrorMessage: function() {
			$( '.lookUpError' ).fadeOut();
		}
	});

	return app.Views.LookUpPage;
});
