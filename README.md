# Spotify API Project Overview


### Description: This API is designed to serve as a music search using the Spotify Web API. The user will be allowed to display the artists that are searched along with their albums and shows. 

# Prerequisites

•MongoDB >= 5.1

•NodeJS >= v16.13.0

•npm >= v8.1.0

•Brew >= v3.4.3 (if MacOS)

•React >= v18

•Chrome/Firefox/Safari/Edge >= Latest 2 major versions

•Bootstraps

## Other Considerations
Ports 3000, and 8888 must be open on host OS. Make sure no other applications are running on those ports by running the following command:

`sudo lsof -nP -i4TCP:3000 | grep LISTEN && sudo lsof -nP -i4TCP:3001 | grep LISTEN`

# Getting Started
You will need to set up your .env file in order to setup the project. You can do this by making a copy of our .env.dist and naming it to .env using the following command.

`cp .env.dist .env && vim .env`

Place all of your environment variables inside the vim window, then save. After you have done that you will need to install all of your node_modules using the following command. Make sure you have yarn installed globally as well.

`npm install -g yarn
yarn`

After yarn has finished installing all of your node_modules you can now run the project. You will need to open two different bash sessions. One for the frontend app and one for the backend Express application.

To Run React.js (frontend)

`cd react
npm start`



# Links
The links to the project are as follows:

•http://localhost:3000 - Link to the frontend (Nuxt.js) application. This is the primary user interface of the Spotify application

•http://localhost:3001 - Link to the backend (Express) API

•http://localhost:3001/spotify/v1 - Link to the Spotify API middleware

•http://localhost:3001/spotify/v1/status - Endpoint to check the status of our application's JWT. Returns true if a valid JWT exists. False otherwise

•http://localhost:3001/spotify/v1/login - Endpoint request a new JWT from Spotify using the authentication workflow

•http://localhost:3001/spotify/v1/search - Endpoint for a general/global search to Spotify. Returns JSON of all results