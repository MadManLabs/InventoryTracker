define([
	'app'
], function( app ) {
	'use strict';

	app.Models.Department = Backbone.Model.extend ({
		defaults: {
			'id'	: undefined,
			'name'	: ''
		}
	});

	return app.Models.Department;
});