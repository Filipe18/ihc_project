import BannerImage from '../assets/fundo.jpeg'
import PhoneImage from '../styles/suction.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'


function Suction() {

  // Catch Rating value
  

    return (
        <div className="home2">
            <div className="headerContainer_Sp_Guide">
                <p>Suction Handle</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                
                <div className="container2">
                
                    <p><Rating initialValue={5} readonly/> 319 reviews</p>
                    <p>SKU: EU145361-1</p>
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
                    <p>- Light-duty suction cup for removing phone and tablet glass panels.</p>
                    <p>- 45 mm (1.875 inch) diameter.</p>
                    <p>- Folding plastic handle.</p>
                </div>
                <div className="container2">
                    <h4>Specifications:</h4>
                    <p>- Color: Black</p>
                </div>
            </div>    
            


            

                
            
        </div>
        
    )
}

export default Suction