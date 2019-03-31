var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

var arnab = new Person("Arnab");
var james  = new Person("James");

arnab.on('msg', function(msg) {

	console.log(`${this.name} texted ${james.name} : ${msg}`);

});


arnab.emit("msg", "Let's go to the Cinema!");
