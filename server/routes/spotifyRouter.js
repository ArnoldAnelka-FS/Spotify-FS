const express = require('express');
const spotifyRouter = require('./routes/spotify');
const spotifyController = require('./controllers/spotifyController');

spotifyRouter.get("/login", spotifyController.login);
// spotifyRouter.get("/auth", spotifyController.auth);
// spotifyRouter.get("/token", spotifyController.token);
// spotifyRouter.get("/search", spotifyController.search);

module.exports = spotifyRouter;