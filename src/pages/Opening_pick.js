import BannerImage from '../assets/fundo.jpeg'
import PhoneImage from '../styles/opening_pick1.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'
import Popup from 'reactjs-popup';
import {Link} from 'react-router-dom'

function Opening_pick() {

  // Catch Rating value
  
    
    return (
        <div className="home2">
            <div className="headerContainer_Sp_Guide">
                <p>Opening Pick Tool</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                
                <div className="container2">
                
                    <p><Rating initialValue={4.4} readonly/> 123 reviews</p>
                    <p>SKU: EU145123-2</p>
                    <p>Price: €4,95</p>
                    <p>Quantity: Set of Six</p>
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
                      <Link to="/opening_pick">
                      <button className='button2' onClick>
                        Buy
                      </button>
                      </Link>
                      <Link to="/opening_pick">
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
                    <p>- 6 very thin opening picks</p>
                    <p>- Used for prying, sliding, separating, and air guitaring.</p>
                    <p>- These picks are especially useful for prying open iPads and other glue-laden devices.</p>
                </div>
                <div className="container2">
                    <h4>Specifications:</h4>
                    <p>- Material:	Delrin</p>
                    <p>- Dimensions:	38 x 36 x 0.5mm</p>
                    <p>- Color: Blue</p>
                </div>
            </div>    
            


            

                
            
        </div>
        
    )
}

export default Opening_pick