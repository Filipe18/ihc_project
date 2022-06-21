import BannerImage from '../assets/fundo.jpeg'
import PhoneImage from '../styles/plastic.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'
import Popup from 'reactjs-popup';
import {Link} from 'react-router-dom'

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
                    <Popup trigger={<button className='button2'>Buy</button>}>
              <div className="popup-box">
                <div className="box">    
                <label>
              Payment method:
              <select
                name="device"
                required>
                <option key="default"></option>
                <option value="phone">MbWay</option>
                <option value="tablet">Visa</option>
                <option value="smartwatch">Money Transfer</option>
                
              </select>
            </label>
            <label>
            Address Line 1:
            <input type="text" id="brand" />
            </label>
            <label>
            Address Line 2:
            <input type="text" id="model" />
            </label>
            <label>
            City:
            <input type="text" id="brand" />
            </label>
            <label>
            Country:
            <input type="text" id="brand" />
            </label>
                      <Link to="/plastic_cards">
                      <button className='button2' onClick>
                        Buy
                      </button>
                      </Link>
                      <Link to="/plastic_cards">
                      <button className='button2' onClick>
                        Cancel
                      </button>
                      </Link>
                    
                </div>
              </div>
            </Popup>
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