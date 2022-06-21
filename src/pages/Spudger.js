import BannerImage from '../assets/fundo.jpeg'
import PhoneImage from '../styles/spudger.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'
import Popup from 'reactjs-popup';
import {Link} from 'react-router-dom'

function Spudger() {

  // Catch Rating value
  
    
    return (
        <div className="home2">
            <div className="headerContainer_Sp_Guide">
                <p>Spudger</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                
                <div className="container2">
                
                    <p><Rating initialValue={4.1} readonly/> 89 reviews</p>
                    <p>SKU: EU145002-4</p>
                    <p>Price: €2,95</p>
                    <p>Quantity: One</p>
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
                      <Link to="/spudger">
                      <button className='button2' onClick>
                        Buy
                      </button>
                      </Link>
                      <Link to="/spudger">
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
                    <p>- Say hello to the newest member of our spudger lineup. The Carbon Fiber Spudger is made from Fixite, our own custom blend of carbon and glass fibers in nylon. It’s twice as strong as our standard Spudger, with the same form factor you know and love.</p>
                    <p>- In a bend test, the Carbon Fiber Spudger required twice as much force for a 2 cm deflection than our standard Spudger. It won’t jump as much when you finally get that ribbon cable up or a clip popped out, and you can exert greater force on delicate parts with lesser effort. Fixite also better holds its sharp edges against scraping and poking over time, so its precision is built to last.</p>
                    <p>- Poke and pry with all the awesome power that science can offer.</p>
                </div>
                <div className="container2">
                    <h4>Specifications:</h4>
                    <p>- Part #	922-5065</p>
                    <p>- Color: Black</p>
                </div>
            </div>    
            


            

                
            
        </div>
        
    )
}

export default Spudger