define([
	'app'
], function( app ) {
	'use strict';

	app.Models.Device = Backbone.Model.extend ({
		defaults: {
			'id'			: undefined,
			'type'			: '',						// phone, tablet, laptop
			'device'		: '',						// iPhone 5, iPad Mini, EliteBook 8570
			'description'	: '',
			'manufacturer'	: '',
			'owner'			: '',
			'serial'		: '',
			'assigned'		: moment( 'MM-DD-YYYY' ),
			'expires'		: moment( 'MM-DD-YYYY' ),
			'department'	: '',
			'image'			: undefined
		}
	});

	return app.Models.Device;
});