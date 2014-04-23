export class Dog {
	constructor(name = 'Unnamed Dog') {
		this.name = name;
	};
	
	bark() {
		console.log("Woof Woof! My name is " + this.name);
	};
};