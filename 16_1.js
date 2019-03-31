var Person = require("./16_Obj");
var arnab = new Person("Arnab");
var james  = new Person("James");

arnab.on('msg', function(msg) {

	console.log(`${this.name} texted ${james.name} : ${msg}`);

});


arnab.emit("msg", "Let's go to the Cinema!");
