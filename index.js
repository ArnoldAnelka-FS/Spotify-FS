require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const mongoose = require('mongoose');
const querystring = require('node:querystring');
const { CLIENT_SECRET, CLIENT_ID, REDIRECT_URI } = process.env;

const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const stateKey = 'spotify_auth_state';


app.get('/login', (req, res) => {
    const state = generateRandomString(16);
    res.cookie(stateKey, state);

    const scope = 'user-read-private user-read-email';

    const queryParams = querystring.stringify({
        response_type: 'code',
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        state: state,
        scope: scope
    });
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
})

app.get('/callback', (req, res) => {
    const code = req.query.code || null;

axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI
     }),
    headers: { 
        'content-type': 'application/x-www-form-urlencoded','Authorization': `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
})
.then(response => {
    if (response.status === 200) {

      const { access_token, refresh_token } = response.data;

      const queryParams = querystring.stringify({
        access_token: access_token,
        refresh_token: refresh_token
      });

      // redirect to react app
      res.redirect(`http://localhost:3000/?${queryParams}`);

    } else {
      res.redirect(`/?${querystring.stringify({ error:
         'invalid_token' })}`);
    }
  })
  .catch(error => {
    res.send(error);
    console.log(error);
  });
});
// Refresh feature ********** 
app.get('/refresh_token', (req, res) => {
    const { refresh_token } = req.query;
  
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
      },
    })
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        res.send(error);
        console.log(error);
      });
  });

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


const PORT = 8888;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

