# Spotify API Project Overview


### Description: This API is designed to serve as a music search using the Spotify Web API. The user will be allowed to display the artists that are searched along with their albums and tracks. 

# Prerequisites

### MongoDB >= 5.1
NodeJS >= v16.13.0
npm >= v8.1.0
Yarn >= v1.22.19
Chrome/Firefox/Safari/Edge >= Latest 2 major versions

## Other Considerations
Ports 3000, and 3001 must be open on host OS. Make sure no other applications are running on those ports by running the following command:

sudo lsof -nP -i4TCP:3000 | grep LISTEN && sudo lsof -nP -i4TCP:3001 | grep LISTEN