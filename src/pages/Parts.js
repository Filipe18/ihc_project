import BannerImage from '../assets/fundo.jpeg'
import '../styles/tools_parts.css'
import * as React from 'react';
import {Link} from "react-router-dom"




function Parts() {

    
    return (


        <div className="home_tools_parts"  style={{backgroundImage: `url(${BannerImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',}} >
            <div className="space"></div>
            <form className="home_form">
            <div className="headerContainer">
            
                <h1>Parts</h1>
            </div>
       
            <div className="button_container1">
                <div className="button_container1">
                    <Link to="/filter_phone" style={{ textDecoration: 'none' }}>
                        <button class="button_phone" role="button"><h1>Phone</h1></button>
                    </Link>  
                </div>
                <div className="button_container1">
                    <Link to="/filter_tablet" style={{ textDecoration: 'none' }}>
                        <button class="button_tablet" role="button"><h1>Tablet</h1></button>
                    </Link>
                </div>
                <div className="button_container1">
                    <Link to="/filter_PC" style={{ textDecoration: 'none' }}>
                        <button class="button_pc" role="button"><h1>PC</h1></button>
                    </Link>
                </div>
                <div className="button_container1">
                    <Link to="/filter_watch" style={{ textDecoration: 'none' }}>
                        <button class="button_watch" role="button"><h1>SmartWatch</h1></button>
                    </Link>
                </div>
                
            </div>
            
            </form>

        </div>
        
    )
}

export default Parts



