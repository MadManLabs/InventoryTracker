/*global require*/

require.config({
	shim: {
		bootstrap: {
			deps: ['jquery'],
			exports: 'jquery'
		}
	},
	paths: {
		jquery: '../bower_components/jquery/jquery',
		backbone: '../bower_components/backbone-amd/backbone',
		underscore: '../bower_components/underscore-amd/underscore',
		moment: '../bower_components/moment/moment',
		bootstrap: 'vendor/bootstrap'
	}
});

require([
	'app',
	'router',
	'bootstrap',
	'moment',
	'models/device',
	'models/department',
	'models/employee',
	'collections/devices',
	'collections/departments',
	'collections/employees',
	'views/homeNavigation',
	'views/launchPage',
	'views/scanPage',
	'views/lookUpPage',
	'views/browsePage',
	'views/listPage',
	'views/devicePage',
	'util/noclickdelay'
], function ( app, Router ) {
	'use strict';

	function onDeviceReady() {
		app.cordova = true;
		Router.initialize();
		new app.util.NoClickDelay($('body')[0]);
	}

	document.addEventListener('deviceready', onDeviceReady, false);

// Init for Browser Only; Comment out if deploying to Cordova //
	// $(document).ready(function(){
	// 	if (!window.device && !app.cordova) {
	// 		Router.initialize();
	// 	}
	// });
// END Init //

});