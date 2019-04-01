var axios = require("axios");
var http = require("http");
var inquirer = require("inquirer");

var movieName = "";

inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Enter a movie",
      name: "movieName"
    }
]).then(function(response) {
    movieName=response.movieName;

    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
    function(response) {

        // console.log("Release  ", response.data);

        var server = http.createServer(function(req, res) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>HTML Response</title>
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                    </head>
                    <body>
                        <div class="container">
                            <div class="jumbotron">
                                <h1 class="display-4">${response.data.Title}</h1>
                                <img src=${response.data.Poster} class="img-fluid" alt="Responsive image">
                                <h4> ${response.data.Year} </h4>
                                <p> Genre: ${response.data.Genre} </p>\n
                                <p> Actors: ${response.data.Actors} </p>\n
                                
                            </div>
                            <div>
                            <p> Plot: ${response.data.Plot} </p>\n
                            <p> Director: ${response.data.Director} </p>\n
                            <p> Awards: ${response.data.Awards} </p>\n
                            <h5> Box Office: ${response.data.BoxOffice} </h5>
                            </div>
                        </div>
                
                    </body>
                </html>
            `);
        
        });
        server.listen(3000);
        console.log("Server listening on port 3000");

    }
    );




});


