import { useEffect, useState } from "react";
import Format from "./layout/format";


function App() {
  const Client_ID = `f6e66b16d04645a18ef3f591e8f78abc`
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState(useState,"")






  return (
    <div className="App">
      <Format>
      <header className="Header">
        <img src="./spotify.svg" alt="logo" className="Logo">
        </img>
      <input type="text" placeholder="Search..." className="Search"/>
      </header>
      <div className="Container">

      <p>
          Spotify Web-API - Anelka Arnold
         </p>
        <a href={`${AUTH_ENDPOINT}?client_id=${Client_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}> Login to Spotify</a>
        
      </div>
      <footer className="Footer">
        <img src="./spotify.svg" alt="logo" className="Logo">
        </img>
      <input type="text" placeholder="Search..." className="Search"/>
      </footer>

      </Format>
    </div>
  );
}

export default App;
