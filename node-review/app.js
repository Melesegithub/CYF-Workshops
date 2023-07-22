const express = require('express');
// loading the express module on line one
console.log("Log 1: ", typeof app);


const server = express();
// initialise a server
console.log("Log 2: ", typeof server);



server.get("/",(req,res)=>{
    res.send("You have successfully reached the server")
});
// set up a "/" endpoint
server.listen(9090,()=>{
    console.log("Server Started at 9090 --- ")
})