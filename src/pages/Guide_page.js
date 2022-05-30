import BannerImage from '../assets/fundo.jpeg'
import '../styles/Guides.css'
import * as React from 'react';




function Guide_page() {

    
    return (
        <div className="home"  style={{backgroundImage: `url(${BannerImage})`}} >
            <div className="headerContainer">
                <p>Samsung Galaxy S8 Repair Guides</p>
            </div>
            <div className="container">
                <div className="container1">
                </div>
                <div className="container2">
                    <p>Difficulty: 9/10</p>
                    <p>Number of steps: 23</p>
                    <p>Tools: 2</p>
                    <p>Parts needed: 4</p>

                </div>
            </div>
            <h2><left>Introdução</left></h2>
            <div className="text">   
                <p>If your iPhone 12 screen is cracked, not responding to touch, or not showing a picture when your phone is powered on, use this guide to restore your iPhone to working order with a new screen, a.k.a. display assembly.The combined earpiece speaker + sensor assembly affixed to the back of the display is paired to your individual iPhone from the factory, so you must transfer it from your old display to your new one during any display replacement. It contains the flood illuminator, which is part of the biometric Face ID security feature. If it is damaged or replaced, Face ID will cease to function, so take extra care not to damage any of these components during this procedure. If damaged, only Apple or an Apple-authorized technician can restore Face ID function.Note: True Tone functionality is disabled after a screen replacement, even when using an original Apple screen.</p>
            </div> 
        </div>
        
    )
}

export default Guide_page