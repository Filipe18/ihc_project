import BannerImage from '../assets/fundo.jpeg'
import '../styles/Guides.css'
import * as React from 'react';
import {Link} from "react-router-dom"
import PCImage from '../styles/LenovoLegionY530.jpg'



function Guide_page() {

    
    return (
        <div className="home" >
            <div className="headerContainer_Guides">
                <p>Lenovo Legion Y530 Repair Guides</p>
            </div>
            <div className="big_container_no_border1">
            <div className="container7" style={{backgroundImage: `url(${PCImage})`}}>
                </div>
            <div className="container7">
            
                <div className="container_guides">
                    <Link to="/LenovoY530_battery">
                        <button class="button2" role="button">Battery Replacement</button>
                    </Link>
                    
                
                    
                    
                </div>

                
            </div>

            </div>
            
            <Link to="/ask_repair">
                <button class="button2" role="button">Did not find what you were looking for? Ask for a guide!</button>
                </Link>
        </div>
        
    )
}

export default Guide_page