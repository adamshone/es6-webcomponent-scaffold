es6-webcomponent-scaffold
=========================

A skeleton for an application built from [Polymer](http://www.polymer-project.org/) web components written in ES6 ("Harmony"), transpiled to ES5 using [Traceur](https://github.com/google/traceur-compiler).

What do I get?
--------------

* A skeleton application consisting of three web components written in ES6.
* An approach for decoupled communication between web components using an event hub.
* Grunt hooks to automatically transpile the ES6 code to ES5 on live reload.

How do I get it?
----------------

* Clone the repository.
* From the project directory, run `npm install` to get the NPM dependencies.
* Run `bower install` to get the Bower dependencies.
* Run `grunt traceur` to transpile the ES6 code to ES5 (you only have to do this once).
* Run `grunt serve` to serve up the application on port 9000.

What does the app do?
---------------------

The skeleton just consists of three very basic web components written in ES6:

* A transmitter, which dispatches events when you click either of the two buttons;
* A receiver, which receives the events and displays them;
* A non-visual component which wraps the [Emitr](https://github.com/BladeRunnerJS/emitr) library. This is used by the other two web components for dispatching and receiving events, allowing them to communicate indirectly.

How do I develop?
-----------------

Assuming you are hosting the app locally using `grunt serve`, the normal live reload functionality will work. The Traceur task is integrated into the file watching so that any changes you make to ES6 code will be transpiled on the fly.

Which ES6 features are used?
----------------------------

The sample web components use these features of ES6:

* module imports
* class and method definitions
* destructuring assignment
* the arrow function
* template strings
* the 'let' keyword