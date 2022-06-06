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
                <Link to="/">
                    <img src={Logo} />
                </Link>
                <div className="hiddenLinks">
                    <NavLink activeStyle={{color: "red"}}  to="/add_guides" > Add Guides </NavLink>
                <NavLink to="/about"> About </NavLink>
                <NavLink to="/login"> Login </NavLink>
                    
                </div>
            </div>
            <div className="rightSide">
                <NavLink activeStyle={{color: "red"}}  to="/add_guides" > Add Guides </NavLink>
                <NavLink to="/about"> About </NavLink>
                <NavLink to="/login"> Login </NavLink>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar