import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/background4.jpg'
import '../styles/Home.css'

function Add_guides() {
    return (
        <div className="home" >
            <div className="headerContainer" style={{backgroundImage: `url(${BannerImage})`}}>
                <h1>Self-Repair</h1>
                <Link to="/guides">
                <button>See the guides</button>
                </Link>
            </div>
    
        </div>
    )
}

export default Add_guides
