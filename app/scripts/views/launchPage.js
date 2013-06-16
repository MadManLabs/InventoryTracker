'use strict';

define([
	'backbone'
], function( Backbone ) {
	app.Views.LaunchPage = Backbone.View.extend( {
		el: '.hero-unit',

		template: _.template( $( '#launchPageTemplate' ).html() ),

		events: {
			'click .scan'	: 'scan',
			'click .lookUp'	: 'lookUp',
			'click .browse'	: 'browse'
		},

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html( this.template );
		},

		scan: function() {
			app.Views.scanPage.render();
		},

		lookUp: function() {
			app.Views.lookUpPage.render();
		},

		browse: function() {
			app.Views.browsePage.render();
		}
	});
});
