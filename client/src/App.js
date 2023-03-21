import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { useEffect, useState } from "react";
import { accessToken, logout } from "./spotify";
import './App.css';



function App() {
  const [token, setToken] = useState(null);
   useEffect(() => {
    setToken(accessToken);
   }, []);

  return (
    
    <div className="App">
      <Header/>
      <section className="App-body">
        {!token ? (
        <a
          className="App-link"
          href="http://localhost:8888/login"
        >
          Log into Spotify App
        </a>
        ) : (
         <h1 className='App-login'> Welcome to Spotify!</h1>

        
        )}
        <button onClick={logout}>Logout</button>
      
      </section>
      <Footer/>
    </div>
  );
}

export default App;
