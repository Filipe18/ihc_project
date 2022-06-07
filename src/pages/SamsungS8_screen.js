import BannerImage from '../assets/fundo.jpeg'
import Popup from 'reactjs-popup'
import PhoneImage from '../styles/screen_s8.jpeg'
import step1 from '../styles/screen_s8_step1.jpeg'
import step2 from '../styles/screen_s8_step2.jpeg'
import step3 from '../styles/screen_s8_step3.jpeg'
import step4 from '../styles/screen_s8_step4.jpeg'
import step5 from '../styles/screen_s8_step5.jpeg'
import author from '../styles/screen_s8_author.jpeg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Link } from 'react-router-dom'



function Guide_page() {

    
    return (
        <div className="home1"  style={{backgroundImage: `url(${BannerImage})`}} >
            <div className="headerContainer1">
                <p>Samsung Galaxy S8 Screen Replacement</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                <div className="container2">
                    <p>Difficulty: 9/10</p>
                    <p>Number of steps: 5</p>
                    <p>Tools: 4</p>
                    <p>Parts needed: 5</p>

                </div>
            </div>
            <h2><left>Introduction</left></h2>
            <div className="text">   
                <p>Use this guide to replace a cracked or broken display on your Samsung Galaxy S8. This guide instructs you to replace only the display while leaving the original frame, motherboard, and battery in place. However, some replacement screens for this phone come pre-installed in a new frame (a.k.a. chassis), which requires a very different procedure—transplanting your phone's internals and installing a new battery. Make sure you have the correct part before starting this guide.</p>
            </div> 
            <div className="big_container_no_border">
                <div className="tools">
                    <h4>Tools:</h4>
                    <p>- Suction Handle</p>
                    <p>- Spudger</p>
                    <p>- Tweezers</p>
                    <p>- Phillips #00 Screwdriver</p>
                </div>
                <div className="parts">
                    <h4>Parts:</h4>
                    <p>- Galaxy S8 Display Adhesive Strips</p>
                    <p>- Galaxy S8 Display Heat Dissipation Sticker</p>
                    <p>- Galaxy S8 Midframe</p>
                    <p>- Galaxy S8 Rear Cover Adhesive</p>
                    <p>- Tesa 61395 Tape</p>
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
                    <p>- Slide the opening pick down the side of the phone, separating the adhesive.</p>
                    <p>Note: Go slowly so that the tool doesn't slip out of the seam. If cutting becomes difficult, reheat and reapply the iOpener.</p>


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
                    <p>To install a new back cover:</p>
                    <p>- Use tweezers to peel away any remaining adhesive from the phone's chassis. Then clean the adhesion areas with high concentration isopropyl alcohol (at least 90%) and a lint-free cloth to prep the surface for the new adhesive.</p>
                    <p>- Peel the adhesive backing off of the new rear glass, carefully line up one edge of the glass against the phone chassis, and firmly press the glass onto the phone.</p>
                    

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
                    <p>- Remove eleven 3.7 mm screws using a Phillips #000 screwdriver.</p>
                    <p>- Remove the NFC antenna and charging coil assembly.</p>
                </div>
            </div>

            <div className="text">   
                <h3>Step 4:</h3>
            </div> 
            <div className="big_container_no_border">
                <div className="step_image" style={{backgroundImage: `url(${step4})`}}>
                    <p></p>
                </div>
                <div className="step_text">
                    <p>- Use the flat end of a spudger to disconnect the battery connector.</p>
                    <p>Note: Although the battery is not shown in the next steps, there is no need to remove it for this guide. Just disconnect the battery and you're good to go.</p>
                </div>
            </div>


            <div className="text">   
                <h3>Step 5:</h3>
            </div> 
            <div className="big_container_no_border">
                <div className="step_image" style={{backgroundImage: `url(${step5})`}}>
                    <p></p>
                </div>
                <div className="step_text">
                    <p>- Once the screen is warm to the touch, apply a suction cup as close to the heated edge of the phone as you can while avoiding the curved edge.</p>
                    <p>Note: The suction cup will not make a good seal on the curved portion of the glass.</p>
                    <p>- If the phone's screen is cracked, the suction cup may not stick. Try lifting it with strong tape, or superglue the suction cup in place and allow it to cure so you can proceed.</p>
                </div>
            </div>    
            

            <h2><left>Finish</left></h2>
            <p>You can download the file here! <a href='/Samsung_s8_screen.pdf' download>Click to download</a></p>
            
            <p>And its done! now follow the steps back to reasemble your device</p>
            <p>This guide was checked by out team and verified. If you have any problems make sure you followed all the steps or contact us, contact info on "about us" page</p>
            

            <div className="author">
                <div className="author_image" style={{backgroundImage: `url(${author})`}}>
                </div>
                <div className="author_text">
                    <p>Author: John Dough</p>
                    <p>Total Upvotes: 2600 points</p>

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