import BannerImage from '../assets/fundo.jpeg'
import Image from '../styles/mother_s8.png'
import '../styles/Specific_Guides.css'
import * as React from 'react';




function Guide_page() {

    
    return (
        <div className="home">
            <div className="headerContainer_Sp_Guide">
                <p>Samsung Galaxy S8 Motherboard Replacement</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${Image})`}}>
                </div>
                <div className="container2">
                    <p>Difficulty: 8/10</p>
                    <p>Number of steps: 15</p>
                    <p>Tools: 4</p>
                    <p>Parts needed: 1</p>

                </div>
            </div>
            <h2><left>Introduction</left></h2>
            <div className="text">   
                <p>Use this guide to remove or replace a faulty motherboard.

This guide involves removing the rear glass cover, you will need replacement adhesive to reattach the back cover to the phone.

The motherboard and daughterboard will differ slightly depending on whether you have the North American Snapdragon (G950U) or international Exynos (G950F) version of the phone. This guide uses the North American version. The motherboard and daughterboard are not interchangeable between the two versions.</p>
            </div> 
        </div>
        
    )
}

export default Guide_page