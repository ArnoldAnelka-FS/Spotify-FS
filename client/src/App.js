import './App.css';
import axios from 'axios';
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const CLIENT_ID = 'f8ced044e54d420997e46ccae0a64a56'
  const REDIRECT_URI = 'http://localhost:3000'
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])

  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)

  }, [])

  const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
      window.location= "/"
  }

  const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "artist",
            object: "albums"
        }
      })
      console.log(data);

    setArtists(data.artists.items)
}

const renderArtists = () => {
  return artists.map(artist => (
       <div className='App-result' key={artist.id}>
            {artist.images.length ? <img width={"25%"} src={artist.images[0].url} alt=""/> : <div></div>}
            {artist.name}
        </div>
  
  ))
}
// const renderAlbums = () => {
//   return albums.map(album => (
//       <div className='App-result' key={album.id}>
//             {album.images.length ? <img width={"25%"} src={album.images[0].url} alt=""/> : <div></div>}
//             {album.name}
//         </div>
//   ))
// }

  return (
      <div className="App">
            <Header/>
          <header className="App-header">
              <h1 className='App-link'>Welcome to Anelka's Spotify App</h1>
              {!token ?
                  <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                      to Spotify</a>
                  : <button onClick={logout} className="App-link">Logout</button>}

              {token ?
                  <form onSubmit={searchArtists}>
                      <input className='App-search' type="text" onChange={e => setSearchKey(e.target.value)}/>
                      <button className='App-button' type={"submit"}>Search</button>
                  </form>
                  : <h2>Please Log In </h2>
              }

{renderArtists()}
          </header>
          <Footer/>
      </div>
  );
}

export default App;
