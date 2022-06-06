import BannerImage from '../assets/fundo.jpeg'
import PhoneImage from '../styles/screen_s8.jpeg'
import step1 from '../styles/screen_s8_step1.jpeg'
import step2 from '../styles/screen_s8_step2.jpeg'
import '../styles/Specific_Guides.css'
import * as React from 'react';




function Guide_page() {

    
    return (
        <div className="home"  style={{backgroundImage: `url(${BannerImage})`}} >
            <div className="headerContainer1">
                <p>Samsung Galaxy S8 Screen Replacement</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                <div className="container2">
                    <p>Difficulty: 9/10</p>
                    <p>Number of steps: 23</p>
                    <p>Tools: 2</p>
                    <p>Parts needed: 4</p>

                </div>
            </div>
            <h2><left>Introduction</left></h2>
            <div className="text">   
                <p>Use this guide to replace a cracked or broken display on your Samsung Galaxy S8. This guide instructs you to replace only the display while leaving the original frame, motherboard, and battery in place. However, some replacement screens for this phone come pre-installed in a new frame (a.k.a. chassis), which requires a very different procedure—transplanting your phone's internals and installing a new battery. Make sure you have the correct part before starting this guide.

This guide involves removing the rear glass cover, you will need replacement adhesive to reattach the back cover to the phone. If your replacement screen does not come with adhesive, you will need to use tape to secure it as well.

If the frame is damaged or bent, it's important to replace it, or else the new screen may not mount correctly and can suffer damage from uneven pressure.

The process of separating the display from the frame usually destroys the display, so don't follow this guide unless you intend to replace the display.</p>
            </div> 
            <div className="big_container_no_border">
                <div className="tools">
                    <h4>Tools:</h4>
                    <p>- iOpener</p>
                    <p>- Suction Handle</p>
                    <p>- iFixit Opening Picks (Set of 6)</p>
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
                
            
        </div>
        
    )
}

export default Guide_page