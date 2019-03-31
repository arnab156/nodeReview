// Core node package for reading and writing files
var fs = require("fs");


fs.writeFile("cars.txt", "Honda CR-V 2019", function(err) {

  
  if (err) {
    return console.log(err);
  }

  
  console.log("cars.txt was updated!");

});

fs.readFile("vehicles.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
  
    console.log(data);
  
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
  
    // We will then re-display the content as an array for later use.
    console.log(dataArr);
  
  });


text = ","+process.argv[2];

if (text != null){
    fs.appendFile("vehicles.txt", text, function(err) {

        // If an error was experienced we will log it.
        if (err) {
          console.log(err);
        }
      
        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
          console.log("Content Added!");
        }
      
      });  

}

