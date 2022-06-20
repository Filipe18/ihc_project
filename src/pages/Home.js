//import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/background.jpeg'
import '../styles/Home.css'
import * as React from 'react';



function Home() {

    
    return (


        <div className="home2"  style={{backgroundImage: `url(${BannerImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',}} >
            <div className="space"></div>
            <form className="home_form">
            <div className="headerContainer">
            
                <h1>What are you trying to fix?</h1>
            </div>
       
            <div className="button_container">
                <div className="button_container">
                    <Link to="/filter_phone" style={{ textDecoration: 'none' }}>
                        <button class="button_phone" ><h1>Phone</h1></button>
                    </Link>  
                </div>
                <div className="button_container">
                    <Link to="/filter_tablet" style={{ textDecoration: 'none' }}>
                        <button class="button_tablet" role="button"><h1>Tablet</h1></button>
                    </Link>
                </div>
                <div className="button_container">
                    <Link to="/filter_PC" style={{ textDecoration: 'none' }}>
                        <button class="button_pc" role="button"><h1>PC</h1></button>
                    </Link>
                </div>
                <div className="button_container">
                    <Link to="/filter_watch" style={{ textDecoration: 'none' }}>
                        <button class="button_watch" role="button"><h1>SmartWatch</h1></button>
                    </Link>
                </div>
            </div>
            </form>
            <form className="home_form">
            <div className="aboutSection" id='section1'>
                
                <div className="headerContainer">
                    <h1>
                    About us
                    </h1>
                </div>
                

                <div class="aboutText">

                <p>Things break. Wear and tear is normal, but throwing away almost-functional devices shouldn't be. We have everything you need to fix your gadgets yourself: quality replacement parts, precision tools, and free step-by-step instructions verified by our in-house repair experts. We help thousands of people repair their devices every day. And every time you fix something, you help the planet by keeping e-waste from entering the landfill.</p>
                
                </div>

                <div className="headerContainer">
                    <h1>
                    Contact us
                    </h1>
                </div>

                <div class="aboutText">
                <p>You can contact us at fakeemail@fake.com or by our customer support line at 234123123</p>

                </div>

            </div>
            </form>
        </div>
        
    )
}

export default Home


