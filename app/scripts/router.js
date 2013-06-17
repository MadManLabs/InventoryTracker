'use strict';

define([
	'backbone',
	'collections/devices',
	'collections/departments',
	'views/launchPage',
	'views/scanPage',
	'views/lookUpPage',
	'views/browsePage'
], function( Backbone ) {
	app.Router.Router = Backbone.Router.extend( {

		routes: {
			''						: 'default',
			'launch'				: 'launchApp',
			'scan'					: 'launchScan',
			'lookUp'				: 'launchLookUp',
			'browse'				: 'launchBrowse',
			'list/devices'			: 'listDevices',
			'list/departments'		: 'listDepartments',
			'list/:device/models'	: 'listModels'
		},

		initialize: function() {
			app.Views.launchPage = app.Views.launchPage || new app.Views.LaunchPage();
			app.Views.scanPage = app.Views.scanPage || new app.Views.ScanPage();
			app.Views.lookUpPage = app.Views.lookUpPage || new app.Views.LookUpPage();
			app.Views.browsePage = app.Views.browsePage || new app.Views.BrowsePage();
			app.Views.listPage = app.Views.listPage || new app.Views.ListPage();
		},

		default: function() {
			this.navigate( 'launch', { trigger: true });
		},

		launchApp: function() {
			app.Views.launchPage.render();
		},

		launchScan: function() {
			app.Views.scanPage.render();
		},

		launchLookUp: function() {
			app.Views.lookUpPage.render();
		},

		launchBrowse: function() {
			app.Views.browsePage.render();
		},

		listDevices: function() {
			app.Views.listPage.collection = app.Collections.devices;
			app.Views.listPage.listType = 'device';
			app.Views.listPage.listFilter = undefined;
			app.Views.listPage.callingAttribute = undefined;
			app.Views.listPage.showAttribute = 'type';
			app.Views.listPage.render();
		},

		listDepartments: function() {
			app.Views.listPage.collection = app.Collections.departments;
			app.Views.listPage.listType = 'department';
			app.Views.listPage.listFilter = undefined;
			app.Views.listPage.callingAttribute = undefined;
			app.Views.listPage.showAttribute = 'department';
			app.Views.listPage.render();
		},

		listModels: function( device ) {
			app.Views.listPage.collection = app.Collections.devices;
			app.Views.listPage.listType = 'model';
			app.Views.listPage.listFilter = device;
			app.Views.listPage.callingAttribute = 'type';
			app.Views.listPage.showAttribute = 'device';
			app.Views.listPage.render();
		},

		getClickedElement: function( event ) {
			return $( event.target );
		},

		initializeStorage: function() {
			if (Modernizr.localstorage) {

			} else {

			}
			app.Collections.devices = new app.Collections.Devices([	{ id: 1, device: 'iPhone 4', type: 'phone', department: 'Information Technology', owner: 'Chris Butler', manufacturer: 'Apple' },
																	{ id: 2, device: 'iPad 2', type: 'tablet', department: 'Information Technology', owner: 'Keith Gibbs', manufacturer: 'Apple' },
																	{ id: 3, device: 'Nexus 10', type: 'tablet', department: 'Research', owner: 'David Brown', manufacturer: 'Samsung' },
																	{ id: 4, device: 'iPad 2', type: 'tablet', department: 'Research', owner: 'Patricia Cortes', manufacturer: 'Apple' },
																	{ id: 5, device: 'iPad 3', type: 'tablet', department: 'Information Technology', owner: 'Jared Collier', manufacturer: 'Apple' },
																	{ id: 6, device: 'iPhone 5', type: 'phone', department: 'Research', owner: 'Patricia Cortes', manufacturer: 'Apple' },
																	{ id: 7, device: 'iPhone 5', type: 'phone', department: 'Information Technology', owner: 'Jared Collier', manufacturer: 'Apple' },
																	{ id: 8, device: 'Kindle Fire HD', type: 'tablet', department: 'Information Technology', owner: 'Jared Collier', manufacturer: 'Kindle' },
																	{ id: 9, device: 'Kindle Fire HD', type: 'tablet', department: 'Research', owner: 'David Brown', manufacturer: 'Kindle' },
																	{ id: 10, device: 'Galaxy Note 8', type: 'tablet', department: 'Information Technology', owner: 'Chris Butler', manufacturer: 'Samsung' },
																	{ id: 11, device: 'iPad Mini', type: 'tablet', department: 'Information Technology', owner: 'Jared Collier', manufacturer: 'Apple' },
																	{ id: 12, device: 'MacBook Pro', type: 'laptop', department: 'Information Technology', owner: 'Jared Collier', manufacturer: 'Apple' },
																	{ id: 13, device: 'MacBook Pro', type: 'laptop', department: 'Information Technology', owner: 'Keith Gibbs', manufacturer: 'Apple' },
																	{ id: 14, device: 'EliteBook 8570', type: 'laptop', department: 'Research', owner: 'Matthew Curtis', manufacturer: 'Hewlett Packard' },
																	{ id: 15, device: 'EliteBook 8570', type: 'laptop', department: 'Sup and Reg', owner: 'Rachel Black', manufacturer: 'Hewlett Packard' },
																	{ id: 16, device: 'EliteBook 8580', type: 'laptop', department: 'Sup and Reg', owner: 'Catherine Cardon', manufacturer: 'Hewlett Packard' },
																	{ id: 17, device: 'EliteBook 8570', type: 'laptop', department: 'Sup and Reg', owner: 'Amy Chan', manufacturer: 'Hewlett Packard' },
																	{ id: 18, device: 'Blackberry Bold 9900', type: 'phone', department: 'Information Technology', owner: 'Jared Collier', manufacturer: 'RIM' },
																	{ id: 19, device: 'Blackberry Bold 9900', type: 'phone', department: 'Research', owner: 'David Brown', manufacturer: 'RIM' },
																	{ id: 20, device: 'Blackberry Bold 9900', type: 'phone', department: 'Sup and Reg', owner: 'Rachel Black', manufacturer: 'RIM' }, ]);

			app.Collections.departments = new app.Collections.Departments([	{ id: 1, device: 'Research' },
																			{ id: 2, device: 'ITD' },
																			{ id: 3, device: 'Community Outreach' } ]);

			app.Collections.employees = new app.Collections.Employees([ { id: 1, name: 'Jared Collier', department: 'Information Technology' },
																		{ id: 2, name: 'Keith Gibbs', department: 'Information Technology' },
																		{ id: 3, name: 'Chris Butler', department: 'Information Technology' },
																		{ id: 4, name: 'David Brown', department: 'Research' },
																		{ id: 5, name: 'Patricia Cortes', department: 'Research' },
																		{ id: 6, name: 'Matthew Curtis', department: 'Research' },
																		{ id: 7, name: 'Rachel Black', department: 'Sup and Reg' },
																		{ id: 8, name: 'Catherine Cardon', department: 'Sup and Reg' },
																		{ id: 9, name: 'Amy Chan', department: 'Sup and Reg' } ]);
		}
	});
});