import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./Login";
import Dashboard from "./Dashboard";


const code = new URLSearchParams(window.location.search).get("code");


function App() {
  
  return code ? <Dashboard code={code} /> : <Login />
}

export default App;
