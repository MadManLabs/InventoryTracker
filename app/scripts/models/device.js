define([
	'backbone'
], function( Backbone ) {

	app.Models.Device = Backbone.Model.extend ({
		defaults: {
			'id'			: undefined,
			'name'			: '',
			'description'	: '',
			'manufacturer'	: '',
			'owner'			: '',
			'assigned'		: moment( 'MM-DD-YYYY' ),
			'expires'		: moment( 'MM-DD-YYYY' ),
			'department'	: '',
			'image'			: undefined
		}
	});

});