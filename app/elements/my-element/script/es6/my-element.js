Polymer('my-element', {
  ready: function() {
		//console.log(this.$)
  },
  attributeChanged: function(attrName, oldVal, newVal) {
    console.log(attrName, 'old: ' + oldVal, 'new:', newVal);
  }
});
