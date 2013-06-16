'use strict';

define([
	'backbone',
	'collections/devices',
	'collections/departments'
], function( Backbone ) {
	app.Views.BrowsePage = Backbone.View.extend( {
		el: '.hero-unit',

		template: _.template( $( '#browsePageTemplate' ).html() ),

		render: function() {
			this.$el.html( this.template );

			app.Views.devicesList = app.Views.devicesList || new app.Views.DevicesList({ el: '.devicesList', collection: app.Collections.devices });
			app.Views.departmentsList = app.Views.departmentsList || new app.Views.DepartmentsList({ el: '.departmentsList', collection: app.Collections.departments });

			app.Views.devicesList.render();
			app.Views.departmentsList.render();

		}
	});
});

