import PhoneImage from '../styles/hemostat.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'


function Hemostat() {

  // Catch Rating value
  
    
    return (
        <div className="home2">
            <div className="headerContainer_Sp_Guide">
                <p>Hemostat</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                
                <div className="container2">
                
                    <p><Rating initialValue={4} readonly/> 89 reviews</p>
                    <p>SKU: EU145020-5</p>
                    <p>Price: €19,95</p>
                    <p>Quantity: One</p>
                    <p className="p_green">In Stock</p>

                </div>
            </div>
            <div className="text1">   
                <h2>Product Details</h2>
            </div> 
            <div className="big_container_no_border">
                <div className="container2">
                    <h4>Description:</h4>
                    <p>- Best quality hemostat with high polish finish and tough serrated jaws. Imported from Japan.</p>
                    <p>- A simple tool with small needle-nose jaws that lock closed with a ratchet on the handle end. Use it to pick up and hold small items, clamp parts together for gluing, or as a handy heat sink when soldering.</p>
                    <p>- The hemostat is a truly ancient surgical tool. Drawings of primitive versions dating to 1500 BC have been found in Egypt.</p>
                </div>
            </div>    
            


            

                
            
        </div>
        
    )
}

export default Hemostat