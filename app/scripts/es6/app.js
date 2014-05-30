$(function() {
	let element = $("#header");
	element.append("<div><p>This message is added by application level (i.e non web component) ES6 code. It comes from the file app/scripts/es6/app.js.</p></div>")
	element.append("<div>Click the buttons in the Transmitter web component to dispatch an event that is received by the Receiver web component.</div>");
});