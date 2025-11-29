const express = require('express');

const app = express()
const axios = require('axios');

const user = {
    name: "Eham",
    age: 25,
    occupation: "Student",
    Instituition: "International Islamic University Chittagong"
}

app.get('/user', (req, res) => {
    //    res.send({
    //         name: "Kabir",
    //         phone: "01610993887"
    //    })
    res.json(user);
})

app.get('/info', (req, res) => {
    const url = "http://localhost:4000/home";

    axios.get(url)
        .then(response => {
            console.log('Response Data:', response.data);
        })

        .catch(error => {
            console.error("Error catching home data:", error.message)
        })
    res.send("info ok");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000...");
})