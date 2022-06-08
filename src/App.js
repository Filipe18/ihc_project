import './App.css';
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Add_guides from './pages/Add_guides';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Galaxy_s8 from './pages/Samsung_s8_Guide';
import Galaxy_s9 from './pages/Samsung_s9_Guide';
import Galaxy_s10 from './pages/Samsung_s10_Guide';
import Iphone_7 from './pages/Iphone_7';
import Iphone_X from './pages/Iphone_X';
import Iphone_12 from './pages/Iphone_12';
import Ipad_mini from './pages/Ipad_mini_4';
import Login from './pages/Login';
import SamsungS8_screen from './pages/SamsungS8_screen';
import SamsungS8_battery from './pages/SamsungS8_battery';
import Ask_Guide from './pages/Ask_Guide';
import Filter_phone from './pages/Filter_phone';
import Filter_PC from './pages/Filter_PC';
import Filter_tablet from './pages/Filter_tablet';
import Filter_watch from './pages/Filter_watch';
import Store from './pages/Store';
import Parts from './pages/Parts';
import Tools from './pages/Tools';
import Drivers_Wrenches from './pages/Drivers_Wrenches';




function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/add_guides' element={<Add_guides />}/>
          <Route exact path='/Galaxy_s8' element={<Galaxy_s8 />}/>
          <Route exact path='/Galaxy_s9' element={<Galaxy_s9 />}/>
          <Route exact path='/Galaxy_s10' element={<Galaxy_s10 />}/>
          <Route exact path='/Iphone_7' element={<Iphone_7 />}/>
          <Route exact path='/Iphone_X' element={<Iphone_X />}/>
          <Route exact path='/Iphone_12' element={<Iphone_12 />}/>
          <Route exact path='/Ipad_mini' element={<Ipad_mini />}/>
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/SamsungS8_screen' element={<SamsungS8_screen />}/>
          <Route exact path='/SamsungS8_battery' element={<SamsungS8_battery />}/>
          <Route exact path='/filter_phone' element={<Filter_phone />}/>
          <Route exact path='/filter_PC' element={<Filter_PC />}/>
          <Route exact path='/filter_tablet' element={<Filter_tablet />}/>
          <Route exact path='/filter_watch' element={<Filter_watch />}/>
          <Route exact path='/ask_guide' element={<Ask_Guide />}/>
          <Route exact path='/Store' element={<Store />}/>
          <Route exact path='/Parts' element={<Parts />}/>
          <Route exact path='/Tools' element={<Tools />}/>
          <Route exact path='/Drivers_Wrenches' element={<Drivers_Wrenches />}/>
          
        </Routes>
        <Footer/>
      </Router>
       
    </div>
  );
}

export default App;
