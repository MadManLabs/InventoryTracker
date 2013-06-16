define([
	'backbone'
], function( Backbone ) {

	app.Models.Device = Backbone.Model.extend ({
		defaults: {
			'id'			: undefined,
			'name'			: '',
			'description'	: '',
			'manufacturer'	: '',
			'image'			: undefined
		}
	});

});