import PhoneImage from '../styles/tweezers_set.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'


function Tweezers_set() {

  // Catch Rating value
  
    
    return (
        <div className="home2">
            <div className="headerContainer_Sp_Guide">
                <p>Precision Tweezers Set</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                
                <div className="container2">
                
                    <p><Rating initialValue={4} readonly/> 89 reviews</p>
                    <p>SKU: EU145020-5</p>
                    <p>Price: €14,95</p>
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
                    <p>- Electronic components are usually tiny, extremely delicate, and difficult to reach during a repair. Working with them requires tools that can access to the depths of your device and safely handle even the tiniest components. Tools just like our tweezer set.</p>
                    <p>- This set is a selection of three specialty tweezers that ensure you’ll be equipped for any cable that comes your way.</p>
                    <p>- Apart from electronics, this tweezer set is also useful for any precise gripping or grasping, such as model construction, working with mechanical devices like watches, and even plucking your eyebrows.</p>
                </div>
                <div className="container2">
                    <h4>Specifications:</h4>
                    <p>- Material: Steel</p>
                    <p>- Dimensions: 102 x 6 x 203mm</p>
                    <p>- Length:	5" / 127mm</p>
                </div>
            </div>    
            


            

                
            
        </div>
        
    )
}

export default Tweezers_set