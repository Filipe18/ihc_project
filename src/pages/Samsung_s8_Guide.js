import BannerImage from '../assets/fundo.jpeg'
import '../styles/Guides.css'
import * as React from 'react';
import {Link} from "react-router-dom"




function Guide_page() {

    
    return (
        <div className="home"  style={{backgroundImage: `url(${BannerImage})`}} >
            <div className="headerContainer_Guides">
                <p>Samsung Galaxy S8 Repair Guides</p>
            </div>

            <div className="container">
                <div className="container_guides">
                    <Link to="/SamsungS8_screen">
                        <button class="button2" role="button">Screen Replacement</button>
                    </Link>
                    <Link to="/SamsungS8_battery">
                        <button class="button2" role="button">Battery Replacement</button>
                    </Link>
                    <Link to="/SamsungS8_sensor">
                        <button class="button2" role="button">Fingerprint Sensor Replacement</button>
                    </Link>
                    <Link to="/SamsungS8_back_glass">
                        <button class="button2" role="button">Back Glass Replacement</button>
                    </Link>
                    <Link to="/SamsungS8_speaker">
                        <button class="button2" role="button">Speaker Replacement</button>
                    </Link>
                    <Link to="/SamsungS8_mother">
                        <button class="button2" role="button">Motherboard Replacement</button>
                    </Link>
                
                    
                    
                </div>

                
            </div>

            
            <Link to="/Ask_Guide">
                <button class="button" role="button">Did not find what you were looking for? Ask for a guide!</button>
                </Link>
        </div>
        
    )
}

export default Guide_page



