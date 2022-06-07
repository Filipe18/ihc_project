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
            <form className="home_form">
            <div className="headerContainer">
            
                <h1>What are you trying to fix?</h1>
            </div>
       
            <div className="button_container">
                <div className="button_container">
                    <Link to="/filter_phone" style={{ textDecoration: 'none' }}>
                        <button class="button_phone" role="button"><h1>Phone</h1></button>
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

                An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. An About Us page should make sure to cover basic information about the store and its founders, explain the company's purpose and how it differs from the competition, and encourage discussion and interaction. Here are some free templates, samples, and example About Us pages to help your ecommerce store stand out from the crowd.
                When it comes to personalizing your online store, nothing is more effective than an About Us page. This is a quick summary of your company's history and purpose, and should provide a clear overview of the company's brand story. A great About Us page can help tell your brand story, establish customer loyalty, and turn your bland ecommerce store into an well-loved brand icon. Most impo
                In this post, we'll give you three different ways to create a professional about us page for your online store, blog, or other website - use our about us page generator, use the fill-in-the-blank about us template below, or create your own custom page using the about us examples within this article.
                </div>
                
            </div>
            </form>
        </div>
        
    )
}

export default Home


