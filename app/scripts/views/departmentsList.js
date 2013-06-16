'use strict';

define([
	'backbone'
], function( Backbone ) {
	app.Views.DepartmentsList = Backbone.View.extend( {
		template: _.template( $( '#departmentsListTemplate' ).html() ),

		render: function() {
			this.$el.html( this.template({ collection: this.collection }) );
		}
	});
});

