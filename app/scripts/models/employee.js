define([
	'app'
], function( app ) {
	'use strict';

	app.Models.Employee = Backbone.Model.extend ({
		defaults: {
			'id'			: undefined,
			'name'			: '',
			'department'	: ''
		}
	});

	return app.Models.Employee;
});