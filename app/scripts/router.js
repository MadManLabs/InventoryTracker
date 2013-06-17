'use strict';

define([
	'backbone',
	'collections/devices',
	'collections/departments',
	'views/launchPage',
	'views/scanPage',
	'views/lookUpPage',
	'views/browsePage'
], function( Backbone ) {
	app.Router.Router = Backbone.Router.extend( {
		routes: {
			''		: 'launchApp'
		},

		launchApp: function() {
			app.Views.launchPage = app.Views.launchPage || new app.Views.LaunchPage();
			app.Views.scanPage = app.Views.scanPage || new app.Views.ScanPage();
			app.Views.lookUpPage = app.Views.lookUpPage || new app.Views.LookUpPage();
			app.Views.browsePage = app.Views.browsePage || new app.Views.BrowsePage();

			app.Views.launchPage.render();
		},

		initializeStorage: function() {
			app.Collections.devices = new app.Collections.Devices([	{ 'id': 1, 'name': 'iPhone 4', 'manufacturer': 'Apple' },
															{ 'id': 2, 'name': 'iPad 2', 'manufacturer': 'Apple' },
															{ 'id': 3, 'name': 'Galaxy Nexus', 'manufacturer': 'Samsung' } ]);

			app.Collections.departments = new app.Collections.Departments([	{ id: 1, name: 'Research' },
																	{ id: 2, name: 'ITD' },
																	{ id: 3, name: 'Community Outreach' } ]);


		}
	});
});