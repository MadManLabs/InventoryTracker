/*global require*/
'use strict';

// Provide a global location to place configuration settings and module creation
var app = {
	Models: {},
	Collections: {},
	Views: {}
};
/*
app.Models = {};
app.Collections = {};
app.Views = {};
*/
require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		bootstrap: {
			deps: ['jquery'],
			exports: 'jquery'
		}
	},
	paths: {
		jquery: '../bower_components/jquery/jquery',
		backbone: '../bower_components/backbone-amd/backbone',
		underscore: '../bower_components/underscore-amd/underscore',
		bootstrap: 'vendor/bootstrap'
	}
});

require([
	'backbone',
	'bootstrap',
	'models/device',
	'models/department',
	'collections/devices',
	'collections/departments',
	'views/launchPage',
	'views/scanPage',
	'views/lookUpPage',
	'views/browsePage',
	'views/devicesList',
	'views/departmentsList',
], function ( Backbone ) {
	Backbone.history.start();

	app.Collections.devices = new app.Collections.Devices([	{ 'id': 1, 'name': 'iPhone 4', 'manufacturer': 'Apple' },
															{ 'id': 2, 'name': 'iPad 2', 'manufacturer': 'Apple' },
															{ 'id': 3, 'name': 'Galaxy Nexus', 'manufacturer': 'Samsung' } ]);

	app.Collections.departments = new app.Collections.Departments([	{ id: 1, name: 'Research' },
																	{ id: 2, name: 'ITD' },
																	{ id: 3, name: 'Community Outreach' } ]);

	app.Views.launchPage = new app.Views.LaunchPage();
	app.Views.scanPage = new app.Views.ScanPage();
	app.Views.lookUpPage = new app.Views.LookUpPage();
	app.Views.browsePage = new app.Views.BrowsePage();
});