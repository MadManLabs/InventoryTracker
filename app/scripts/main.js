/*global require*/
'use strict';

// Provide a global location to place configuration settings and module creation
var app = {
	Models: {},
	Collections: {},
	Views: {},
	Router: {}
};

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
		localStorage: '../bower_components/backbone.localStorage/backbone.localStorage',
		bootstrap: 'vendor/bootstrap'
	}
});

require([
	'backbone',
	'bootstrap',
	'localStorage',
	'router',
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
	app.Router.router = new app.Router.Router();

	app.Router.router.initializeStorage();

	Backbone.history.start();

	return app.Router.router;
});