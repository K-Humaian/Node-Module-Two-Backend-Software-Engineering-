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

app.get('/user/:Age', (req, res) => {
    res.json(user);
    console.log("Accessing the path or route parameter => ",req.params.Age); // Accessing path or route parameter
})

app.get('/student', (req, res) => {
    res.send({
        Name: "MD. Humaian Kabir",
        ID: "C221134",
        Section : "8DM",
        Semester: "8th"
    });
    console.log("Accessing the query parameter. => ",req.query.id); // Accessing query parameter
    console.log("Accessing the query parameter. => ",req.query.name); // Accessing query parameter

})

app.listen(3000, () => {
    console.log("Server is running on port 3000...");
});