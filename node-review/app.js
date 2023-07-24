const { application } = require("express");
const express = require("express");
// loading the express module on line one

const server = express();
// initialise a server

server.get("/", function (request, response) {
  response.status(200).send("You have successfully reached the server");
});
server.listen(9090, () => {
  console.log("You have successfully reached the server");
});
// set up a "/" endpoint
// it should respond with "You've successfully reached the server"
// it should respond with status code 200
