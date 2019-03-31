//** */CORE CONCEPTS ** ** ** **
//** ** **  */
console.log("Hello, my name is Arnab");

//global objects with node
global.console.log("Did you know Node.js was created by Ryan Dahl in 2009");

//Any variable you create is scoped only to that module and not globally.
var nodeInfo = "After several changes and reorganizations node.js and io.js combined to create the current version of node";

// console.log(global.nodeInfo); // will result in undefined if global.nodeInfo

// console.log(`Additional Information about Node:
// ${nodeInfo}`);

console.log(__dirname); //ACCESS CURRENT DIRECTORY 
console.log(__filename); // ACCESS FILE PATH

