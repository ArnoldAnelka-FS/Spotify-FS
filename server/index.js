require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');
const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send("Port is up and running")
})

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    console.log("hi")
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/login',
        clientId:'f6e66b16d04645a18ef3f591e8f78abc',
        clientSecret:'e376b11665204bb0a73e62eb1e889bb6',
        refreshToken,
    })

    spotifyApi.refreshAccessToken()
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch(() => {
        res.sendStatus(400)
    })


app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId:'f6e66b16d04645a18ef3f591e8f78abc',
        clientSecret:'e376b11665204bb0a73e62eb1e889bb6'
    })      

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    })
    .catch(() => {
        res.sendStatus(400)
  })
})
})
// Mongodb
mongoose.connect(process.env.mongoDBURL)
.then(() => {console.log("MONGODB connected");
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