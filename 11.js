var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What is your favorite city?", function(ans){
    console.log(ans);
});