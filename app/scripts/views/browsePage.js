'use strict';

define([
	'backbone',
	'collections/devices',
	'collections/departments'
], function( Backbone ) {
	app.Views.BrowsePage = Backbone.View.extend( {
		el: '.hero-unit',

		template: _.template( $( '#browsePageTemplate' ).html() ),

		events: {
			'click .devicesList'	: 'showDevicesList',
			'click .departmentsList': 'showDepartmentsList'
		},

		render: function() {
			this.$el.html( this.template );
			app.Views.listPage = app.Views.listPage || new app.Views.ListPage();

		},

		showDevicesList: function() {
			app.Views.listPage.collection = app.Collections.devices;
			app.Views.listPage.render();
		},

		showDepartmentsList: function() {
			app.Views.listPage.collection = app.Collections.departments;
			app.Views.listPage.render();
		}
	});
});

