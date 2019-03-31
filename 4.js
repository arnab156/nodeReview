process.stdout.write("Hello \n");
process.stdout.write("My name is Arnab \n"); //you will need \n , try without \n

// Let's create a fun Q&A game

var questions = [
    "What is your name?",
    "What is your fav hobby?",
    "What is your preferred programming language?"
  ];

  var answers = [];  //we will push answers to this array later

  //Let's ask the question by envoking a function

  function ask(number){
    process.stdout.write(`\n\n\n\n ${questions[number]}`);
    process.stdout.write(`    >    `);
  }

  process.stdin.on("data", function(data){
    console.log("some data was entered", data);
        // answers.push(data.toString().trim());
        // console.log(answers);
        
        
        // if (answers.length < questions.length) {
        //     ask(answers.length);
        // } else {
        //     process.exit();
        // }
    });

ask(0);









// process.on('exit', function() {

// 	process.stdout.write("\n\n\n\n");

// 	process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);

// 	process.stdout.write("\n\n\n\n");

// });











