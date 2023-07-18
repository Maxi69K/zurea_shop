const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth.route');
const MONGO_DB_URL = require('./config/db.Config');
const app = express();
const portNumber = 5050;

mongoose.set('strictQuery', false)

// connect to mongo DB
mongoose.connect(MONGO_DB_URL)
    .then((data) => {
        console.log('Mongo DB is connected.');
    })
    .catch((err) => {
        console.log(err);
        console.log('Error while connecting to mongo DB.');
    })

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