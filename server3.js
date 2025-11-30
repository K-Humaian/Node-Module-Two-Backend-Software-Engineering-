const express = require('express')
const app = express()

const axios = require('axios')

app.get('/user', (req, res) => {

    const url = "http://localhost:8000/items/34/Kabir"
    axios.get(url)
        .then(response => {
            console.log("response data:", response.data)
        })
        .catch(error => {
            console.error("Error fetching data:", error.message)
        })

    res.send("ok")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000...")
})