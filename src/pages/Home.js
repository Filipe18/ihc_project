//import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/fundo.jpeg'
import '../styles/Home.css'
import * as React from 'react';


function Home() {

    
    return (
        <div className="home"  style={{backgroundImage: `url(${BannerImage})`}} >
            <div className="headerContainer">
            
                <h1>What are you trying to fix?</h1>
            </div>
       
            <Link to="/filter_device">
            <div className="button_container">
                <button class="button_phone" role="button"></button>
                <button class="button_tablet" role="button"></button>
                <button class="button_pc" role="button"></button>
                <button class="button_watch" role="button"></button>
            </div>
            </Link>
        </div>
        
    )
}

export default Home


