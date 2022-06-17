import BannerImage from '../assets/fundo.jpeg'
import PhoneImage from '../styles/opening.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'


function Opening_tool() {

  // Catch Rating value
  
    
    return (
        <div className="home2">
            <div className="headerContainer_Sp_Guide">
                <p>Opening tool</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                
                <div className="container2">
                
                    <p><Rating initialValue={3.1} readonly/> 29 reviews</p>
                    <p>SKU: EU145335-1</p>
                    <p>Price: €2,95</p>
                    <p>Quantity: Set of five</p>
                    <p className="p_green">In Stock</p>

                </div>
            </div>
            <div className="text1">   
                <h2>Product Details</h2>
            </div> 
            <div className="big_container_no_border">
                <div className="container2">
                    <h4>Description:</h4>
                    <p>- Custom-designed handle provides no-slip opening power with plenty of grip.</p>
                    <p>- Tough-yet-soft material pries open the tightest cracks, but won't scratch or mar your workpiece.</p>
                    <p>- Two tips provide alternate opening options: Wedge for breaching, and Hook for lifting and levering.</p>
                    <p>- Convenient pack of 5 tools, for 10 total prying tips!</p>
                </div>
                <div className="container2">
                    <h4>Specifications:</h4>
                    <p>- Material: Acetal Co-polymer</p>
                    <p>- Color: Blue</p>
                </div>
            </div>    
            


            

                
            
        </div>
        
    )
}

export default Opening_tool