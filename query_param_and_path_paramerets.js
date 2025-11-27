const express = require('express')
const app = express()

const user = {
    Name: "Md. Humaian Kabir",
    Age: 25,
    Occupation: "Student",
    Address: "Chittagong, Bangladesh"
}

// Writting an get api endpoint.
app.get('/home', (req, res) => {
    res.send("This is a Home Page.")
})

app.get('/user', (req, res) => {
    res.json(user);
})

app.get('/student', (req, res) => {
    res.send({
        Name: "MD. Humaian Kabir",
        ID: "C221134",
        Section : "8DM",
        Semester: "8th"
    });
})

app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000...");
});