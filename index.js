const dotenv = require("dotenv")
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3001;


// app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res, next) => {
    res.send("Port is up and running")
})
// Mongodb
mongoose.connect(process.env.mongoDBURL)
.then(() => {console.log("MONGODB Database connected");
})
.catch((err) => {
    console.error('Error connecting to Mongodb', err)
})

mongoose.connection.on('error', function(err){
    console.log("Could not connect to Database");
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}` );
})