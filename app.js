const express = require('express');
const app = express();

// Making a get api for the route /home of the entire application
// Get is the type of request that can serve the request from the client
// If server wants to send the data then it uses get request.

const user = {
    Name: "Humaian",
    Age: 25,
    Occupation: "Software Engineer",
    Address: "Chittagong, Bangladesh"
}

const data = {
    Product: "Laptop",
    Price: 25000,
    Brand: "HP",
    Model: "Pavilion",
    specification: {
        RAM: "8GB",
        Storage: "1TB",
        Processor: "Intel i5"
    }
}

// If the client want more specific data like student id or user id no. 1 then
// request have to come from the client side and there are two types of request sending
// 1. Query Parameter
// 2. Route Parameter
                                    // Query Parameter: /user?id=1
// But the request must be pass on the bacekend side in reqeuest object. and request is a huge object.
// So without specifying the request object it would be costly for memory.
// So request have a query object that contains all the query parameter.
// So we can access the query parameter by req.query
    // Example: /user?name=humaian&age=25
    // So we can access the query parameter by req.query.name or req.query.age

    // *** Query mostly used for filtering and searching.

                                    // Route parameter
//Route parameter == >  http://localhost:3000/user/34
// Route parameter is different in order to access from the backend. We have to use:
// console.log(req.params.id)
// Also we have to slightly modified the app.get() API endpoint.
                    //So  for user route: 
                    // app.get('/user/:id') and the rest is same.
 
// **** In order to complete the definition of what type of data Get Api wants, query and route parameters used. 

app.get('/home', function (req, res) {
    // Request can be remained unfinished until the server sends a response. like res.send()
    res.json(data);
})

app.get('/user/:id', (req, res) => {
    // Request can be remained unfinished until the server sends a response. like res.send()
    // Data that is sent to the client.
    console.log(req.query.id) // For query parameter.
    console.log(req.params.id) // For route parameter.
    res.json(user);
})

app.get('/contact', (req, res) => {
    // Request can be remained unfinished until the server sends a response. like res.send()
    res.send({
        Email: "humaian2@gmail.com",
        Phone: 8801610993887
    });
})

app.listen(3000)
console.log("server is running...");

