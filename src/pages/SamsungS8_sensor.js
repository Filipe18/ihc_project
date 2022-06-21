import BannerImage from '../assets/fundo.jpeg'
import Image from '../styles/sensor_s8.png'
import '../styles/Specific_Guides.css'
import * as React from 'react';




function Guide_page() {

    
    return (
        <div className="home">
            <div className="headerContainer_Sp_Guide">
                <p>Samsung Galaxy S8 Fingerprint Sensor Replacement</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${Image})`}}>
                </div>
                <div className="container2">
                    <p>Difficulty: 7/10</p>
                    <p>Number of steps: 12</p>
                    <p>Tools: 4</p>
                    <p>Parts needed: 2</p>

                </div>
            </div>
            <h2><left>Introduction</left></h2>
            <div className="text">   
                <p>Use this guide to replace the fingerprint sensor on your Samsung Galaxy S8.

This guide involves removing the rear glass cover, you will need replacement adhesive to reattach the back cover to the phone.</p>
            </div> 
        </div>
        
    )
}

export default Guide_page