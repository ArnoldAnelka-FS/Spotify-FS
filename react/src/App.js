import Format from "./layout/format";

function App() {
  return (
    <div className="App">
      <Format>
      <header className="Header">
        <img src="./spotifylogo.jpeg" alt="logo" className="Logo">
        </img>
      <input type="text" placeholder="Search..." className="Search"/>
      </header>
      <div className="Container">
        <p>Coming Soon!</p>
         <p>
          Spotify Web-API - Anelka Arnold
         </p>
      </div>
      <footer className="Footer">
        <img src="./spotifylogo.jpeg" alt="logo" className="Logo">
        </img>
      <input type="text" placeholder="Search..." className="Search"/>
      </footer>

      </Format>
    </div>
  );
}

export default App;
