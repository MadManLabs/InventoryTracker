define([
	'app'
], function( app ) {
	'use strict';

	app.Views.ScanPage = Backbone.View.extend( {
		el: '.application',

		template: _.template( $( '#scanPageTemplate' ).html() ),

		render: function() {
			this.$el.html( this.template );
			window.plugins.barcodeScanner.scan(
				function(result) {
					if (result.cancelled) {
						app.Router.router.navigate( 'launch', { trigger: true });
					}
					else {
						console.log('we got a code: ' + result.text);
						app.Router.router.navigate( 'device/' + result.text, { trigger: true });
					}
				},
				function(error) {
					console.log('scanning failed: ' + error);
					app.Router.router.navigate( 'launch', { trigger: true });
				},
				['scannerOverlay']
			);
		}
	});

	return app.Views.ScanPage;
});
