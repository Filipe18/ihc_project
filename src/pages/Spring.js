import PhoneImage from '../styles/spring.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'


function Spring() {

  // Catch Rating value
  
    
    return (
        <div className="home2">
            <div className="headerContainer_Sp_Guide">
                <p>Spring Clamps</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                
                <div className="container2">
                
                    <p><Rating initialValue={4} readonly/> 89 reviews</p>
                    <p>SKU: EU145020-5</p>
                    <p>Price: €1,95</p>
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
                    <p>- Get a grip! These mighty spring loaded clamps are great for clamping down screen repairs and all your hold-it-right-there needs. Excellent for glue ups in carpentry and model making, or for pinning down that squirrelly picnic table cloth on a windy day.</p>
                    <p>- Be sure to get at least 4 for iPad and other screen repairs.</p>
                </div>
            </div>    
            


            

                
            
        </div>
        
    )
}

export default Spring