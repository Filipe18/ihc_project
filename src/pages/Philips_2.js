import BannerImage from '../assets/fundo.jpeg'
import PhoneImage from '../styles/philips_1.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'


function Philips_2() {

  // Catch Rating value
  
    
    return (
        <div className="home2">
            <div className="headerContainer_Sp_Guide">
                <p>Phillips #0 Screwdriver</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                
                <div className="container2">
                
                    <p><Rating initialValue={4.1} readonly/> 19 reviews</p>
                    <p>SKU: EU145005-5</p>
                    <p>Price: €4,95</p>
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
                    <p>- Use this precision Phillips #0 screwdriver for electronics repair and DIY projects. The Phillips #0 screw is one of the most commonly used fasteners in consumer electronics, game consoles, laptops, PC desktop computers, and small home appliances. This particular size of Phillips screwdriver blade is also known as Phillips 0, PH 0, and PH #0.</p>
                    <p>- The iFixit Phillips #0 screwdriver features a knurled grip and rubberized, ergonomic handle with swivel top. Made with uncompromising quality in manufacturing, this precision Phillips screwdriver is the last driver you'll ever need to buy.</p>
                </div>
            </div>    
            


            

                
            
        </div>
        
    )
}

export default Philips_2