

# Node workshop

In this workshop, we'll build up a NodeJS app from the ground up and check our understanding as we go along.

Remember to preview the `README` first.


## Level 400

Welcome to Node Workshop Level 400.


Firstly,

Look inside `app.js`, and answer the following:

Q1) What output do you get in your terminal when you run the command `npm start` and make a request to `localhost:9090`


{YOUR_ANSWER_HERE}
Start 
node app.js
Explain why you get this answer. How can you fix this issue?
Because we did not set up '/' endpoint and we did not send a response and listen at 9090.
2) Fix the problem in Q1). Restart the server and call the `localhost:9090` endpoint again - what do you get in your terminal this time? Explain your answer.

{YOUR_ANSWER_HERE}
You have successfully reached the server
3) Double check you're not getting any errors in the terminal when you make a request to the localhost:9090 endpoint.
Additionally, test the server again using another client application like Postman or the browser.


## Requirements

We're going to make the requirements clearer now.

We need to set up a **single endpoint**.

For this endpoint, a client application should be able to make a GET request to the "/" endpoint
and the server should respond with

- a message saying "You've successfully reached the server" 
- and status code 200.

You'll need to keep testing this endpoint works by starting a locally hosted server on port 9090. Remember to check the response body and the status code.

 

