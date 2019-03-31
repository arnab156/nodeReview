var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

var city = {
    name: '',
    thingsToDo:[]
};
rl.question("What is your favorite city?", function(ans){
    city.name = ans;

    rl.setPrompt(`What are your favorite thing to do in ${city.name}?`);
    rl.prompt(); //Will show the setPrompt 

    //use .on method

    rl.on("line", function(toDo){
        console.log(toDo);
        // city.thingsToDo.push(toDo.trim());
        // console.log( city.thingsToDo);

        // rl.setPrompt(`What else would you do in ${city.thingsToDo}? (type 'exit' to leave) `);
		// rl.prompt();
    })
  
});