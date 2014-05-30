/*
 * ES6 Features used in this file:
 * - class and method definition
 * - module export
 * - "let" keyword
 * - destructuring assignment
 * - template strings
 */

export class EventParser {														// class definition, module export
	
	parse(eventObject) {														// method definition
		let {name, time} = eventObject;											// let keyword, destructuring
		return `Received event ${name} at time ${time}`;						// template string
	};
}