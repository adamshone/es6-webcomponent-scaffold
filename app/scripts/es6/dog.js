export class Dog {
	constructor(name = 'Unnamed Doggy') {
		this.name = name;
	};
	
	bark() {
		console.log("Woof! My name is " + this.name);
	};
};