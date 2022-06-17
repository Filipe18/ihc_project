import BannerImage from '../assets/fundo.jpeg'
import PhoneImage from '../styles/plastic.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'


function Plastic_cards() {

  // Catch Rating value
  
    
    return (
        <div className="home2">
            <div className="headerContainer_Sp_Guide">
                <p>Plastic cards</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                
                <div className="container2">
                
                    <p><Rating initialValue={4.1} readonly/> 209 reviews</p>
                    <p>SKU: EU145101-1</p>
                    <p>Price: €4,95</p>
                    <p>Quantity: Set of Two</p>
                    <p className="p_green">In Stock</p>

                </div>
            </div>
            <div className="text1">   
                <h2>Product Details</h2>
            </div> 
            <div className="big_container_no_border">
                <div className="container2">
                    <h4>Description:</h4>
                    <p>- Two credit card-size plastic opening cards.</p>
                    <p>- These smooth cards slide between parts and help undo clips and pry devices open. </p>
                    <p>- Can be used for spreading thermal paste and delicate scraping tasks.</p>
                    <p>- Better and cheaper than Apple Tool # 922-7172!</p>
                </div>
                <div className="container2">
                    <h4>Specifications:</h4>
                    <p>- Material:	PVC</p>
                    <p>- Thickness:	0.762mm</p>
                    <p>- Height:	85.725mm</p>
                    <p>- Width:	55.245mm</p>
                </div>
            </div>    
            


            

                
            
        </div>
        
    )
}

export default Plastic_cards