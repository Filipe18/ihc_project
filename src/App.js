import './App.css';
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Add_guides from './pages/Add_guides';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Galaxy_s8 from './pages/Guide_page';
import Login from './pages/Login';
import Filter_device from './pages/Filter_device';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/add_guides' element={<Add_guides />}/>
          <Route exact path='/Galaxy_s8' element={<Galaxy_s8 />}/>
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/filter_device' element={<Filter_device />}/>
        </Routes>
        <Footer />
      </Router>
       
    </div>
  );
}

export default App;
