'use strict';

define([
	'backbone',
	'collections/devices'
], function( Backbone ) {
	app.Views.DevicesList = Backbone.View.extend( {
		template: _.template( $( '#devicesListTemplate' ).html() ),

		render: function() {
			this.$el.html( this.template({ collection: this.collection }) );
		}
	});
});

