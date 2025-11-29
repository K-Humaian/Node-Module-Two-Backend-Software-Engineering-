const express = require('express')
const app = express();
const axios = require('axios');

const data = {
    name: "Md. Humaian Kabir",
    age: 25,
    Occupation: "Student",
    Address: "Chittagong, Bangladesh"
}
// Writing a get api endpoint.
app.get('/home', (req, res) => {
    res.json(data)
});

app.get('/user', (req, res) => {
    const url = 'http://127.0.0.1:3000/user';
    axios.get(url)

        .then(response => {
            console.log('Response Data:', response.data);
        })

        .catch(error => {
            console.error('Error fetching user data:', error.message);
        });

    res.send("ok");
})

app.listen(4000, () => {
    console.log("Server is running on port 4000...");
})