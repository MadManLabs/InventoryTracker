define([
	'app',
	'models/employee'
], function( app ) {
	'use strict';

	app.Collections.Employees = Backbone.Collection.extend ({
		model: app.Models.Employee
	});

	return app.Collections.Employees;
});