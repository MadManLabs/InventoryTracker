define([
	'app',
	'models/department'
], function( app ) {
	'use strict';

	app.Collections.Departments = Backbone.Collection.extend ({
		model: app.Models.Department
	});

	return app.Collections.Departments;
});