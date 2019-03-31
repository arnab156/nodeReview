// We can use the process object to get environment information, read environment variables, 
// communicate with the terminal, or parent processes, through standard input and standard output. 

console.log(process.argv); //process is global

//in the terminal type `node 3.js --user Arnab --greeting "Hello"`


//Create a function to grab the value for user and greeting flags
// function grab(flag) {
// 	var index = process.argv.indexOf(flag);
// 	return (index === -1) ? null : process.argv[index+1];
// }

// var userName = grab("--user");
// var greeting = grab("--greeting");

// if(!userName || !greeting){
//     console.log("User name/or greeting flags missing");
// }else{
//     console.log(`${userName} says ${greeting}`);
// }