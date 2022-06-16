import {Link} from "react-router-dom"
import BannerImage from '../assets/background.jpeg'
import '../styles/Store.css'
import * as React from 'react';



function Store() {

    
    return (


        <div className="home_store"  style={{backgroundImage: `url(${BannerImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',}} >
            <div className="space"></div>
            <div className="space"></div>
            <form className="store_form">
                <div className="headerContainer2">
                    <h1>Store</h1>
                </div>
                <div className="button_container3">
                    
                    <div className="button_container3">
                        <Link to="/Tools" style={{ textDecoration: 'none' }}>
                            <button class="button_tools" role="button"><h1>Tools</h1></button>
                        </Link>  
                    </div>
                    <div className="button_container3">
                        <Link to="/Parts" style={{ textDecoration: 'none' }}>
                            <button class="button_parts" role="button"><h1>Parts</h1></button>
                        </Link>
                    </div>
                </div>
            </form>
            <div className="space"></div>
            <div className="space"></div>
        </div>
        
    )
}

export default Store
