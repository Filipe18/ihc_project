import BannerImage from '../assets/fundo.jpeg'
import Image from '../styles/lenovo_battery.png'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import step1 from '../styles/battery_lenovoY530_step1.png'
import step2 from '../styles/battery_lenovoY530_step2.png'
import step3 from '../styles/battery_lenovoY530_step3.png'
import author from '../styles/author_lenovoY530.png'
import '../styles/Specific_Guides.css'
import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom'




function Guide_page() {

    
    return (
        <div className="home2">
            <div className="headerContainer_Sp_Guide">
                <p>Lenovo Legion Y530 Battery Replacement</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${Image})`}}>
                </div>
                <div className="container2">
                    <p>Difficulty: 7/10</p>
                    <p>Number of steps: 12</p>
                    <p>Tools: 2</p>
                    <p>Parts needed: 2</p>

                </div>
            </div>
            <div className="text1">
                <h2><left>Introduction</left></h2>
            </div>
            
            <div className="text">   
                <p>If your Lenovo Legion Y530-15ICH isn’t powering on or holding a charge then you should use this guide to replace the battery.

The battery provides power to the rest of the computer. If your computer won’t power on, you may have a faulty power cord or just need to restart your computer. Your problem may be due to a faulty battery or your battery may also be swollen.

Please make sure the laptop is powered off completely and unplugged before beginning.</p>
            </div>

            <div className="big_container_no_border">
                <div className="tools">
                    <h4>Tools:</h4>
                    <p>- Opening picks</p>
                    <p>- Phillips #0 Screwdriver</p>

                </div>
                <div className="parts">
                    <h4>Parts:</h4>
                    <p>- Lenovo L17L3PG1 Battery</p>

                </div>
            </div>
            <div className="text">   
                <h3>Step 1:</h3>
            </div> 
            <div className="big_container_no_border">
                <div className="step_image" style={{backgroundImage: `url(${step1})`}}>
                    <p></p>
                </div>
                <div className="step_text">
                    <p>- Use a PZ00 screwdriver bit to remove the eleven screws securing the back cover.</p>


                </div>
            </div>

            <div className="text">   
                <h3>Step 2:</h3>
            </div> 
            <div className="big_container_no_border">
                <div className="step_image" style={{backgroundImage: `url(${step2})`}}>
                    <p></p>
                </div>
                <div className="step_text">
                    <p>- Use a Phillips screwdriver to remove the five 4 mm screws holding the battery in place.</p>

                </div>
            </div>

            <div className="text">   
                <h3>Step 3:</h3>
            </div> 
            <div className="big_container_no_border">
                <div className="step_image" style={{backgroundImage: `url(${step3})`}}>
                    <p></p>
                </div>
                <div className="step_text">
                    <p>- Disconnect the battery cable from its motherboard socket by gently pulling it towards the battery.</p>
                    <p>Note: Pull parallel to the battery, not straight up.</p>

                </div>
            </div>


            <div className="text1">   
            <h2><left>Finish</left></h2>
            <p>You can download the file here! <a href='/Samsung_s8_screen.pdf' download>Click to download</a></p>
            
            <p>And its done! now follow the steps back to reasemble your device</p>
            <p>This guide was checked by out team and verified. If you have any problems make sure you followed all the steps or contact us, contact info on our home page</p>
            </div> 
            
                    
            

            <div className="author">
                <div className="author_image" style={{backgroundImage: `url(${author})`}}>
                </div>
                <div className="author_text">
                    <p>Author: Jane White</p>
                    <p>Total Upvotes: 3650 points</p>

                </div>
            </div>
            
            <div className='button_container1'>
                <Popup trigger={<button>Upvote the guide</button>}>
                    <div className="popup-box1">
                        <div className="box1">  
                                <h1>Thanks for the suport</h1>
            

                                <Link to="/SamsungS8_screen">
                                    <button onClick >
                                        Close
                                    </button>
                                </Link>
                        </div>
                    </div>
                </Popup>
            </div>
        </div>
        
    )
}

export default Guide_page