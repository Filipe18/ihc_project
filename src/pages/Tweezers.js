import PhoneImage from '../styles/tweezers.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'


function Tweezers() {

  // Catch Rating value
  
    
    return (
        <div className="home2">
            <div className="headerContainer_Sp_Guide">
                <p>Tweezers</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                
                <div className="container2">
                
                    <p><Rating initialValue={4} readonly/> 89 reviews</p>
                    <p>SKU: EU145020-5</p>
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
                    <p>- Grab hold of your repairs with authority.</p>
                    <p>- Invaluable for picking up and handling screws and other small components, as well as plucking eyebrows. </p>
                    <p>- These stainless steel tweezers have an ESD safe coating and come in a variety of tip shapes (pointed, angled, blunt) for powerful precision work.</p>
                </div>
            </div>    
            


            

                
            
        </div>
        
    )
}

export default Tweezers