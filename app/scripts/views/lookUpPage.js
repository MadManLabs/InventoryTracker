define([
	'app'
], function( app ) {
	'use strict';

	app.Views.LookUpPage = Backbone.View.extend( {
		el: '.application',

		template: _.template( $( '#lookUpPageTemplate' ).html() ),

		events: {
			'click .submitLookUp'	: 'submitLookUp',
		},

		render: function() {
			this.$el.html( this.template );
		},

		submitLookUp: function() {
			console.log('submit device number look up');
		},
	});

	return app.Views.LookUpPage;
});
