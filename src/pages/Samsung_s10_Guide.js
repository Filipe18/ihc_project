import BannerImage from '../assets/fundo.jpeg'
import '../styles/Guides.css'
import * as React from 'react';
import {Link} from "react-router-dom"




function Guide_page() {

    
    return (
        <div className="home">
            <div className="headerContainer_Guides">
                <p>Samsung Galaxy S10 Repair Guides</p>
            </div>
            <div className="container1">
                <div className="container_guides">
                    
                </div>

                
            </div>
            <Link to="/ask_repair">
                <button class="button2" role="button">Did not find what you were looking for? Ask for a guide!</button>
                </Link>
        </div>
        
    )
}

export default Guide_page