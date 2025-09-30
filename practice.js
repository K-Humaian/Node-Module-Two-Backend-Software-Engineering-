const express = require('express')
const project = express();
const axios = require('axios');


const user = {
    Student_id: "C221134",
    Student_name: "Md. Humaian Kabir",
    Semester: "8th",
    Section: "8DM",
    Department: "CSE",
    Course: "Software Engineering"
}

const data = {
    product: "Laptop",
    Price: "90k",
    Brand: "HP",
    Model: "Elitebook 840 G3",
    Configuration: {
        RAM: "8GB",
        Storage: "1 TB",
        Processor: "Intel Core i5"
    }
}


project.get('/user/:id', (req, res) => {
    const url = "http://localhost:3000/home"
    axios.get(url)

        .then(resonse => {
            console.log("Response Data:", resonse.data)
        })
        .catch(error => {
            console.error("Error fetching data:", error.message);
        })
        
    res.send("OK");

})


project.get('/home', (req, res) => {
    console.log(req.query.price);
    console.log(req.query.model);
    console.log(req.query.processor);
    console.log("That's it");
    res.json(data);
})

project.get('/contact', (req, res) => {
    res.send({
        Email: "mdhumaiank@gmail.com",
        Phone: 8801610993887
    });

})
project.listen(4000);
console.log("Server is running...");
