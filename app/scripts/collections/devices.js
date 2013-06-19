define([
	'app',
	'models/device'
], function( app ) {
	'use strict';

	app.Collections.Devices = Backbone.Collection.extend ({
		model: app.Models.Device
	});

	return app.Collections.Devices;
});