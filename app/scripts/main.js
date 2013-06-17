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
		bootstrap: 'vendor/bootstrap'
	}
});

require([
	'backbone',
	'bootstrap',
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
	console.log(app.Router.router);
	app.Router.router.initializeStorage();

	Backbone.history.start();
});