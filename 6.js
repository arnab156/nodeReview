console.log("Hello!");

var waitTime = 5000;


var currentTime = 0;
var interval = 500; // half second

setInterval(function(){
    currentTime += interval;
    console.log(`Waiting for: ${currentTime/1000} seconds`)
}, interval);


setTimeout(function(){
    console.log("done!")
}, waitTime);


