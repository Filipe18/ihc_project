import BannerImage from '../assets/fundo.jpeg'
import PhoneImage from '../styles/opening.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'
import Popup from 'reactjs-popup';
import {Link} from 'react-router-dom'

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
                      <Link to="/opening_tool">
                      <button className='button2' onClick>
                        Buy
                      </button>
                      </Link>
                      <Link to="/opening_tool">
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