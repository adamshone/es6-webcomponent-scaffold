/*
 * ES6 Features used in this file:
 * - module import
 * - arrow function for shorthand function definitions
 * - "let" keyword
 */

import {EventParser} from './event-parser';										// module import

Polymer('demo-receiver', {
	
  created: function() {
	  this.receivedEvents = [];
	  this.eventParser = new EventParser();
	  
	  eventBus.on('click-event', (payload) => {									// arrow function
		  let message = this.eventParser.parse(payload);						// let keyword
		  this.receivedEvents.unshift(message);
	  }, this);  
  },
  
  clear: function() {
	  this.receivedEvents = [];
  }
});