const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/fetch-fastapi', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8000/');
        res.json(response.data); // Send fastapi response to the client
    }

    catch (error) {
        // console.error('Error calling FastAPI:', error.message);
        res.status(500).json({error: error.message});
    }
});
// start the server
app.listen(port, () => {
    console.log('Node.js server running on http://localhost:3000');
});