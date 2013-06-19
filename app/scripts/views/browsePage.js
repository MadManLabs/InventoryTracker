define([
	'app',
	'collections/devices',
	'collections/departments'
], function( app ) {
	'use strict';

	app.Views.BrowsePage = Backbone.View.extend( {
		el: '.application',

		template: _.template( $( '#browsePageTemplate' ).html() ),

		events: {
			'click .devicesList'	: 'listDevices',
			'click .departmentsList': 'listDepartments'
		},

		render: function() {
			this.$el.html( this.template );
		},

		listDevices: function() {
			app.Router.router.navigate( 'list/devices', { trigger: true });
		},

		listDepartments: function() {
			app.Router.router.navigate( 'list/departments', { trigger: true });
		}
	});

	return app.Views.BrowsePage;
});

