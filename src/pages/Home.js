import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/background4.jpg'
import '../styles/Home.css'

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer" >
                <h1>Self-Repair</h1>
                <Link to="/guides">
                <button>See the guides</button>
                </Link>
            </div>
    
        </div>
    )
}

export default Home
