import BannerImage from '../assets/fundo.jpeg'
import '../styles/tools_parts.css'
import * as React from 'react';
import {Link} from "react-router-dom"




function Prying_Opening() {

    
    return (


        <div className="home_tools_parts"  style={{backgroundImage: `url(${BannerImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',}} >
            <div className="space"></div>
            <form className="home_form">
            <div className="headerContainer">
            
                <h1>Prying and Opening</h1>
            </div>
       
            <div className="button_container1">
            
                
            </div>
            
            </form>

        </div>
        
    )
}

export default Prying_Opening