console.log("Hello!");

var waitTime = 5000;
var currentTime = 0;
var interval = 500; // half second

var percentWait = 0;


var newInterval = setInterval(function(){ //SAVE IN A VARIABLE
    currentTime += interval;
    console.log(`Waiting for: ${currentTime/1000} seconds`);
    // percentWaited = Math.floor((currentTime/waitTime) * 100);
    // writeWaitingPercent(percentWaited);
}, interval);


setTimeout(function(){
    clearInterval(newInterval);
    console.log("done!");
}, waitTime);


// function writeWaitingPercent(p) {
   
// 	process.stdout.clearLine(); //CLEARS THE PREVIOUS LINE
// 	process.stdout.cursorTo(0); //SETS THE CURSOR TO 0
//     process.stdout.write(`you are waiting for waiting for... ${p}%`);
    
// }

// process.stdout.write("\n\n");
// writeWaitingPercent(percentWait); //for the start and then should happen every interval;



