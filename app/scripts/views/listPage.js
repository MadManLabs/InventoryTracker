'use strict';

define([
	'backbone',
	'collections/devices'
], function( Backbone ) {
	app.Views.ListPage = Backbone.View.extend( {
		el: '.hero-unit',

		template: _.template( $( '#listPageTemplate' ).html() ),

		events: {
			'click .device': 'listModels',
			'click .department': 'listEmployees',
			'click .employee': 'listAssets',
			'click .model': 'listAssets'
		},

		listModels: function( event ) {
			var clickedElement = app.Router.router.getClickedElement( event );
			var target = clickedElement.html();
			app.Router.router.navigate( 'list/' + target + '/models', { trigger: true });
		},

		listEmployees: function( event ) {
//			app.Router.router.navigate( 'list/:department/employees', { trigger: true });
		},

		listAssets: function( event ) {
//			app.Router.router.navigate( 'list/', { trigger: true });
		},

		render: function() {
			var filteredCollection;
			var listElements = [];

			if( this.listFilter ) {
				filteredCollection = this.collection.filter( function( element ) {
					return element.get( this.callingAttribute ) === this.listFilter;
				}, this );

				_.each(filteredCollection, function( element ) {
					listElements.push( element.get( 'device' ) );
				});
			} else {
				listElements = this.collection.pluck( this.showAttribute );
			}

			var uniqueListElements = _.unique( listElements );
			this.$el.html( this.template({ listElements: uniqueListElements }) );
		}
	});
});

