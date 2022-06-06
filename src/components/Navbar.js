import React, {useState} from 'react'
import Logo from "../assets/Logo1.png"
import {Link, NavLink} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => { 
        setOpenLinks(!openLinks)
    }



    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <NavLink to="/">
                    <img src={Logo} />
                </NavLink>
                <div className="hiddenLinks">
                    <NavLink activeStyle={{color: "red"}}  to="/add_guides" > Add Guides </NavLink>
                <Link to="/about_us"> About </Link>
                <NavLink to="/login"> Login </NavLink>
                    
                </div>
            </div>
            <div className="rightSide">
                <NavLink to="/add_guides" style={({ isActive }) => ({ color: isActive ? '#fff' : '#545e6f', color: isActive ? 'blue' : '#f0f0f0', })}> Add Guides </NavLink>
                
                <div onClick={() => window.location.replace("/#section1")} className="aboutStyle">
                    <NavLink to>About</NavLink>
                </div>
                
                <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? '#fff' : '#545e6f', color: isActive ? 'blue' : '#f0f0f0', })}> Login </NavLink>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar