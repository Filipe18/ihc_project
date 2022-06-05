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
       
            <div className="button_container">
            <div className="button_container">
            <Link to="/filter_phone">
                <button class="button_phone" role="button"></button>
            </Link>  
            </div>
            <div className="button_container">
            <Link to="/filter_tablet">
                <button class="button_tablet" role="button"></button>
            </Link>
            </div>
            <div className="button_container">
            <Link to="/filter_PC">
                <button class="button_pc" role="button"></button>
            </Link>
            </div>
            <div className="button_container">
            <Link to="/filter_watch">
                <button class="button_watch" role="button"></button>
            </Link>
            </div>
            </div>
        </div>
        
    )
}

export default Home


