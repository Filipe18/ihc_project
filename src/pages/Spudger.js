import BannerImage from '../assets/fundo.jpeg'
import PhoneImage from '../styles/spudger.jpg'
import '../styles/Specific_Guides.css'
import * as React from 'react';
import { Rating } from 'react-simple-star-rating'


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