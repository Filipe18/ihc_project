import BannerImage from '../assets/fundo.jpeg'
import '../styles/Guides.css'
import * as React from 'react';
import {Link} from "react-router-dom"




function Guide_page() {

    
    return (
        <div className="home"  style={{backgroundImage: `url(${BannerImage})`}} >
            <div className="headerContainer1">
                <p>Samsung Galaxy S9 Repair Guides</p>
            </div>
            <div className="container">
                <div className="container_guides">
                    
                </div>

                
            </div>
            <div className="container_last">
                <button class="button" role="button">Did not find what you were looking for? Ask for a guide!</button>
            </div>
        </div>
        
    )
}

export default Guide_page