import BannerImage from '../assets/fundo.jpeg'
import '../styles/tools_parts.css'
import * as React from 'react';
import {Link} from "react-router-dom"




function Tools() {

    
    return (
        <div className="home_tools_parts"  style={{backgroundImage: `url(${BannerImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',}} >
            <div className="space"></div>
            <form className="home_form">
            <div className="headerContainer">
            
                <h1>Tools</h1>
            </div>
       
            <div className="button_container1">
                <div className="button_container1">
                    <Link to="/Drivers_Wrenches" style={{ textDecoration: 'none' }}>
                        <button class="button_drivers_wrenches" role="button"><h1>Drivers/Wrenches</h1></button>
                    </Link>  
                </div>
                <div className="button_container1">
                    <Link to="/Prying_Opening" style={{ textDecoration: 'none' }}>
                        <button class="button_prying_opening" role="button"><h1>Prying/Opening</h1></button>
                    </Link>
                </div>
                <div className="button_container1">
                    <Link to="/Griping_Cutting" style={{ textDecoration: 'none' }}>
                        <button class="button_griping_cutting" role="button"><h1>Gripping/Cutting</h1></button>
                    </Link>
                </div>
                <div className="button_container1">
                    <Link to="/Consumables" style={{ textDecoration: 'none' }}>
                        <button class="button_consumables" role="button"><h1>Consumables</h1></button>
                    </Link>
                </div>
                
            </div>
            
            </form>

        </div>
        
    )
}

export default Tools



