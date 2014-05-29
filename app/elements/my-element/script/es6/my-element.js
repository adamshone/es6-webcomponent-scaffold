Polymer('my-element', {
  domReady: function() {
		eventBus.on('first-event', function(payload) {
			console.log('element for ' + this.currencyPair + ' got event:', payload);
		}, this);
		
		var self = this;
		window.setTimeout(function() {
			eventBus.trigger('first-event', {currencyPair: self.currencyPair})
		}, 500);
  }
});