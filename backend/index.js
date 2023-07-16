const express = require('express');
const app = express();
const portNumber = 5050;

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('test');
})

app.listen(portNumber, err => {
    if (err) {
        console.log('---ERROR ON SERVER START---');
        console.log(err);
    } else {
        console.log(`Server is running on port: ${portNumber}`);
    }
})