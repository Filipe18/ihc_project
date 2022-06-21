import BannerImage from '../assets/fundo.jpeg'
import PhoneImage from '../styles/set_of.jpg'
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
                <p>Prying and Opening Tool Assortment</p>
            </div>
            <div className="container">
                <div className="container1" style={{backgroundImage: `url(${PhoneImage})`}}>
                </div>
                
                <div className="container2">
                
                    <p><Rating initialValue={4.6} readonly/> 89 reviews</p>
                    <p>SKU: EU145364-1</p>
                    <p>Price: €9,95</p>
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
                      <Link to="/set_of_tools">
                      <button className='button2' onClick>
                        Buy
                      </button>
                      </Link>
                      <Link to="/set_of_tools">
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
                    <p>- Standard tools won't get you very far with many repairs. The cases and components of many devices are not just screwed in, but need to be pried up. You could try a screwdriver, but you risk damaging your device.</p>
                    <p>- It’s much better to use the appropriate tool right away. We’ve compiled the perfect toolkit for safe prying and opening. Made from flexible but sturdy plastic, these are all the tools you need to get into even the smallest gap. Armed with these necessities you're ready to disassemble and remove parts safely.

You’ll be equipped with just the right tool, whether you’re opening your VW car key, servicing your Pfaff sewing machine, or disconnecting fragile press-fit-connectors in electronic devices. As a bonus, you’ll also be your kids’ ultimate Ninja superhero when you successfully separate stubborn LEGO pieces in no time.</p>
                    <p>- This prying and opening tool kit is a super useful addition to the electronics toolbox of any DIY enthusiast, and it’s even perfect for beginners just starting out in the repair world. Whatever your level, repair is always great—for your budget, Mother Nature, and your self-confidence.</p>
                </div>
                <div className="container2">
                    <h4>Specifications:</h4>
                    <p>- Dimensions	102 x 6 x 243mm</p>
                </div>
            </div>    
            


            

                
            
        </div>
        
    )
}

export default Spudger