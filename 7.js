console.log("Hello!");

var waitTime = 5000;


var currentTime = 0;
var interval = 500; // half second

// var newInterval = setInterval(function(){ //SAVE IN A VARIABLE
//     currentTime += interval;
//     console.log(`Waiting for: ${currentTime/1000} seconds`)
// }, interval);


setTimeout(function(){
    // clearInterval(newInterval);
    console.log("done!");
}, waitTime);


