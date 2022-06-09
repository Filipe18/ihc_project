import BannerImage from '../assets/fundo.jpeg'
import Image from '../styles/sensor_s8.png'
import '../styles/Specific_Guides.css'
import * as React from 'react';




function Guide_page() {

    
    return (
        <div className="home"  style={{backgroundImage: `url(${BannerImage})`}} >
            <div className="headerContainer_Sp_Guide">
                <p>Samsung Galaxy S8 Speaker Replacement</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${Image})`}}>
                </div>
                <div className="container2">
                    <p>Difficulty: 3/10</p>
                    <p>Number of steps: 5</p>
                    <p>Tools: 1</p>
                    <p>Parts needed: 1</p>

                </div>
            </div>
            <h2><left>Introduction</left></h2>
            <div className="text">   
                <p>Use this guide to replace a blown out loudspeaker assembly in your Samsung Galaxy S8.

This guide involves removing the rear glass cover, you will need replacement adhesive to reattach the back cover to the phone.

Before disassembling your phone, discharge the battery below 25%. The battery can catch fire and/or explode if accidentally punctured, but the chances of that happening are much lower if discharged.</p>
            </div> 
        </div>
        
    )
}

export default Guide_page