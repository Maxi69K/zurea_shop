const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/auth.route');
const app = express();
const portNumber = 5050;

// Communicate with external server
app.use(cors()); // Middleware
app.use(express.json());
app.use('/api/auth', authRoute)

app.listen(portNumber, err => {
    if (err) {
        console.log('---ERROR ON SERVER START---');
        console.log(err);
    } else {
        console.log(`Server is running on port: ${portNumber}`);
    }
})