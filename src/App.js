import './App.css';
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Add_guides from './pages/Add_guides';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/add_guides' element={<Add_guides />}/>
        </Routes>
        <Footer />
      </Router>
       
    </div>
  );
}

export default App;
