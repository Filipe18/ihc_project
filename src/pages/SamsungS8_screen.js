import BannerImage from '../assets/fundo.jpeg'
import PhoneImage from '../styles/battery_s8.png'
import '../styles/Specific_Guides.css'
import * as React from 'react';




function Guide_page() {

    
    return (
        <div className="home"  style={{backgroundImage: `url(${BannerImage})`}} >
            <div className="headerContainer1">
                <p>Samsung Galaxy S8 Screen Replacement</p>
            </div>
            <div className="container">
                <div className="container1">
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
        </div>
        
    )
}

export default Guide_page