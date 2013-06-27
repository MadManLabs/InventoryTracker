/* NoClickDelay Utility module */
define([
	// Application
	'app'
],

function(app) {
	'use strict';

/* Based on NoClickDelay (http://cubiq.org/) */

	app.util.NoClickDelay = function(el) {
		this.element = typeof el === 'object' ? el : document.getElementById(el);
		if( window.Touch ) {
			this.element.addEventListener('touchstart', this, false);
		}
	};

	app.util.NoClickDelay.prototype = {
		handleEvent: function(e) {
			switch(e.type) {

			case 'touchstart':
				this.onTouchStart(e);
				break;
			case 'touchmove':
				this.onTouchMove(e);
				break;
			case 'touchend':
				this.onTouchEnd(e);
				break;
			}
		},

		onTouchStart: function(e) {
			e.preventDefault();
			this.moved = false;
			this.element.addEventListener('touchmove', this, false);
			this.element.addEventListener('touchend', this, false);
		},

		onTouchMove: function() {
			this.moved = true;
		},

		onTouchEnd: function(e) {
			this.element.removeEventListener('touchmove', this, false);
			this.element.removeEventListener('touchend', this, false);

			if ( !this.moved ) {
				var theTarget = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
				if (theTarget.nodeType === 3) {
					theTarget = theTarget.parentNode;
				}
				var theEvent = document.createEvent('MouseEvents');
				theEvent.initEvent('click', true, true);
				theTarget.dispatchEvent(theEvent);
			}
		}
	};

	return app.util.NoClickDelay;
});
