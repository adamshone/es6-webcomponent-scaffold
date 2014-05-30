/*
 * ES6 Features used in this class:
 * - arrow function for shorthand function definitions
 */

Polymer('demo-transmitter', {
  
  created: function() {
	  
	this.sendA = () => {								// arrow function
		this.sendEvent('A');
	};
	
	this.sendB = () => {								// arrow function
		this.sendEvent('B');
	};
	
	this.sendEvent = (name) => {						// arrow function
		  eventBus.trigger('click-event', {
			  name: name,
			  time: new Date()
		  });
	};
  }
});