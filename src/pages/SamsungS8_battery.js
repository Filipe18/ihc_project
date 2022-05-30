import BannerImage from '../assets/fundo.jpeg'
import Image from '../styles/battery_s8.png'
import '../styles/Specific_Guides.css'
import * as React from 'react';




function Guide_page() {

    
    return (
        <div className="home"  style={{backgroundImage: `url(${BannerImage})`}} >
            <div className="headerContainer1">
                <p>Samsung Galaxy S8 Battery Replacement</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${Image})`}}>
                </div>
                <div className="container2">
                    <p>Difficulty: 7.5/10</p>
                    <p>Number of steps: 14</p>
                    <p>Tools: 3</p>
                    <p>Parts needed: 1</p>

                </div>
            </div>
            <h2><left>Introduction</left></h2>
            <div className="text">   
                <p>Use this guide to replace the worn-out battery in your Samsung Galaxy S8.

Before disassembling your phone, discharge the battery below 25%. A charged lithium-ion battery can catch fire and/or explode if accidentally punctured.

If your battery is swollen, take appropriate precautions. Do not heat your phone. If needed, you can use a dropper or syringe to inject isopropyl alcohol (90+%) around the edges of the back cover to weaken the adhesive. Swollen batteries can be very dangerous, so wear eye protection and exercise due caution, or take it to a professional if you re not sure how to proceed.</p>
            </div> 
        </div>
        
    )
}

export default Guide_page