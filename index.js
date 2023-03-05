const express = require('express');
require("dotenv").config();
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res, next) => {
    res.send("Port is up and running")
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}` );
})