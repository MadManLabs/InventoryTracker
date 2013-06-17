'use strict';

define([
	'backbone',
	'collections/devices'
], function( Backbone ) {
	app.Views.ListPage = Backbone.View.extend( {
		el: '.hero-unit',

		template: _.template( $( '#listPageTemplate' ).html() ),

		render: function() {
			this.$el.html( this.template({ collection: this.collection }) );
		}
	});
});

