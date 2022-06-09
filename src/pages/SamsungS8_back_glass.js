import BannerImage from '../assets/fundo.jpeg'
import Image from '../styles/back_glass_s8.png'
import '../styles/Specific_Guides.css'
import * as React from 'react';




function Guide_page() {

    
    return (
        <div className="home"  style={{backgroundImage: `url(${BannerImage})`}} >
            <div className="headerContainer_Sp_Guide">
                <p>Samsung Galaxy S8 Back Glass Replacement</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${Image})`}}>
                </div>
                <div className="container2">
                    <p>Difficulty: 6/10</p>
                    <p>Number of steps: 7</p>
                    <p>Tools: 1</p>
                    <p>Parts needed: 1</p>

                </div>
            </div>
            <h2><left>Introduction</left></h2>
            <div className="text">   
                <p>Drop your S8? Keep it in the same pocket as your keys?

Chances are the glass back is already shattered. Use this guide to replace the back panel glass on the Samsung Galaxy S8.

If your replacement part does not come with adhesive mounted on it, you will also need to purchase adhesive for the rear glass and the fingerprint reader. You can buy pre-cut adhesive, or thin high-bond tape.</p>
            </div> 
        </div>
        
    )
}

export default Guide_page