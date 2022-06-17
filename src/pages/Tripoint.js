import BannerImage from '../assets/fundo.jpeg'
import PhoneImage from '../styles/philips_1.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'


function Tripoint() {

  // Catch Rating value
  
    
    return (
        <div className="home2">
            <div className="headerContainer_Sp_Guide">
                <p>Tri-point Y0 Screwdriver</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                
                <div className="container2">
                
                    <p><Rating initialValue={4.1} readonly/> 34 reviews</p>
                    <p>SKU: EU145081-4</p>
                    <p>Price: €6,95</p>
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
                    <p>- Use this precision Tri-point Y0 DIY or professional electronics repair. Slightly different from a "tri-wing", this driver fits some of the smaller "tri" screws found on Apple track pads and other products.</p>
                    <p>- The iFixit Tri-point Y0 screwdriver features a knurled grip and rubberized, ergonomic handle with swivel top. Made in Germany with uncompromising quality in manufacturing, this precision Tri-point Y0 screwdriver is the last driver you'll ever need to buy.</p>
                </div>
            </div>    
        </div>
        
    )
}

export default Tripoint