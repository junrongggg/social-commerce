const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Import dotenv directly for ES modules

const { db } = require('./db/db'); //importing from db.js file to connect to mongoDB

dotenv.config();
const PORT = process.env.PORT || 5002 ; // Provide a default port if PORT is not defined in the environment

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
})

/** Connecting to server */
const server = async () => {
    try {
        db()
        app.listen(PORT, () => {
            console.log('Server is listening on port:', PORT);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

server();