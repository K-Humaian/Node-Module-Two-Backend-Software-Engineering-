const express = require('express')
const app = express()

// Writting an get api endpoint. 
// Get is a type of request method that serves requests from clients to the server.

app.get('/home', (req, res) =>{
    res.send("Welcome to the Home Page!");
})
app.listen(3000, (req, res) =>{
    console.log("Server is listening...");
});