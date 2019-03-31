var events = require("events");
var emitter = new events.EventEmitter();

emitter.on("customEvent", function(msg, status){
    console.log(`${status} : ${msg}`);
    
});

emitter.emit("customEvent", "Hello", 200);

// emitter.on("best", function(one, two){
//     console.log(`${one} is crazy about ${two}`);
// });

// emitter.emit("best", "Arnab", "James");

