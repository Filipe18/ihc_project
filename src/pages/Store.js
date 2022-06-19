import '../styles/Home.css'
import React from "react";
import '../styles/popup.css';
import Popup from 'reactjs-popup'
import PhoneImage from '../styles/opening_pick1.jpg'
import Opening_pick from '../styles/opening_pick1.jpg'
import Hemostat from '../styles/hemostat.jpg'
import Opening from '../styles/opening.jpg'
import Pentalobe from '../styles/pentalobe.jpg'
import Philips_1 from '../styles/philips_1.jpg'
import Plastic from '../styles/plastic.jpg'
import Set_of from '../styles/set_of.jpg'
import Spring from '../styles/spring.jpg'
import Spudger from '../styles/spudger.jpg'
import Suction from '../styles/suction.jpg'
import Tweezers from '../styles/tweezers.jpg'
import Tweezers_set from '../styles/tweezers_set.jpg'
import '../styles/Specific_Guides.css'
import { Link } from 'react-router-dom'
import { borderRadius } from '@mui/system';
import Tripoint from './Tripoint';
import Philips_2 from './Philips_2';



class Store extends React.Component {

    
    constructor() {

        super();

        this.showAll = this.showAll.bind(this);
		this.showPrying = this.showPrying.bind(this);
        this.showDrivers = this.showDrivers.bind(this);
        this.showGripping = this.showGripping.bind(this);

        this.state = {

            showComponent: false,
        };

    }


    showAll(e) {
        this.setState({
            show1: e.target.checked,
        });
    }
	showPrying(e) {
        this.setState({
			show2: e.target.checked,
        });
    }
    showDrivers(e) {
        this.setState({
			show3: e.target.checked,
        });
    }

    showGripping(e) {
        this.setState({
			show4: e.target.checked,
        });
    }
    
    render() {

           return (
			
                <div className="home2">
            <div className="headerContainer_Sp_Guide">
                <p>Store for Parts</p>
            </div>
            <div className="text" text-align="center">   
                <p>Here you can find all Tools needed for your repairs</p>
            </div> 
            <div className="big_container_no_border1">
            <div className="filter_box">
                <p><input className="checkbox" type="checkbox" name="enable_comment" onClick={this.showAll} value="enable_comment"/>All</p>
				<p><input className="checkbox" type="checkbox" name="enable_comment" onClick={this.showPrying} value="enable_comment"/>Prying</p>
                <p><input className="checkbox" type="checkbox" name="enable_comment" onClick={this.showDrivers} value="enable_comment"/>Drivers</p>
                <p><input className="checkbox" type="checkbox" name="enable_comment" onClick={this.showGripping} value="enable_comment"/>Gripping</p>

                </div>
                <div className="products_box">
                    {this.state.show1 ? 
                    <div  className="comments_preview_sample">
                        <h1>All</h1>
                <div className="button_container_store">
                    
                        <div className="button_container_store">
                    <Link to="/opening_pick" >
                        <button class="button_store" style={{backgroundImage: `url(${Opening_pick})`,textDecoration: 'none' }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/spudger" >
                        <button class="button_store" style={{backgroundImage: `url(${Spudger})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/set_of_tools" >
                        <button class="button_store" style={{backgroundImage: `url(${Set_of})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
             
            </div>
            <div className='space'></div>
            <div className="button_container_store">
                        <div className="button_container_store">
                    <Link to="/opening_tool" >
                        <button class="button_store" style={{backgroundImage: `url(${Opening})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/plastic_cards" >
                        <button class="button_store" style={{backgroundImage: `url(${Plastic})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/suction" >
                        <button class="button_store" style={{backgroundImage: `url(${Suction})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
             
            </div>
            <div className="button_container_store">
                        <div className="button_container_store">
                    <Link to="/pentalobe" >
                        <button class="button_store" style={{backgroundImage: `url(${Pentalobe})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/philips_1" >
                        <button class="button_store" style={{backgroundImage: `url(${Philips_1})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/tripoint" >
                        <button class="button_store" style={{backgroundImage: `url(${Philips_1})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
             
            </div>
            <div className="button_container_store">
                        <div className="button_container_store">
                    <Link to="/philips_2" >
                        <button class="button_store" style={{backgroundImage: `url(${Philips_1})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/tweezers" >
                        <button class="button_store" style={{backgroundImage: `url(${Tweezers})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/tweezers_set" >
                        <button class="button_store" style={{backgroundImage: `url(${Tweezers_set})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
             
            </div>
            <div className="button_container_store">
                <div className="button_container_store">
                    <Link to="/spring" >
                        <button class="button_store" style={{backgroundImage: `url(${Spring})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/hemostat" >
                        <button class="button_store" style={{backgroundImage: `url(${Hemostat})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
             
            </div>
                    </div> : null}
                    {this.state.show2 ? 
                    <div  className="comments_preview_sample">
                        <h1>Prying</h1>
            <div className="button_container_store">
            <div className="button_container_store">
                    <Link to="/opening_pick" >
                        <button class="button_store" style={{backgroundImage: `url(${Opening_pick})`,textDecoration: 'none' }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>

                <div className="button_container_store">
                    <Link to="/spudger" >
                        <button class="button_store" style={{backgroundImage: `url(${Spudger})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>   
                <div className="button_container_store">
                    <Link to="/set_of_tools" >
                        <button class="button_store" style={{backgroundImage: `url(${Set_of})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
             
                
            </div>
            <div className="button_container_store">
            <div className="button_container_store">
                    <Link to="/plastic_cards" >
                        <button class="button_store" style={{backgroundImage: `url(${Plastic})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/opening_tool" >
                        <button class="button_store" style={{backgroundImage: `url(${Opening})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
            
            <div className="button_container_store">
                    <Link to="/suction" >
                        <button class="button_store" style={{backgroundImage: `url(${Suction})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                 </div>       
                        
                    </div> : null}

                    {this.state.show3 ? 
                    <div  className="comments_preview_sample">
                        <h1>Drivers</h1>
            <div className="button_container_store">
            
                <div className="button_container_store">
                    <Link to="/pentalobe" >
                        <button class="button_store" style={{backgroundImage: `url(${Pentalobe})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/philips_1" >
                        <button class="button_store" style={{backgroundImage: `url(${Philips_1})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/tripoint" >
                        <button class="button_store" style={{backgroundImage: `url(${Philips_1})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
            </div>
            <div className="button_container_store">
            <div className="button_container_store">
                    <Link to="/philips_2" >
                        <button class="button_store" style={{backgroundImage: `url(${Philips_1})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                 </div>       
                        
                    </div> : null}

                    {this.state.show4 ? 
                    <div  className="comments_preview_sample">
                        <h1>Gripping</h1>
            <div className="button_container_store">
            <div className="button_container_store">
                    <Link to="/tweezers" >
                        <button class="button_store" style={{backgroundImage: `url(${Tweezers})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/tweezers_set" >
                        <button class="button_store" style={{backgroundImage: `url(${Tweezers_set})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/spring" >
                        <button class="button_store" style={{backgroundImage: `url(${Spring})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
            </div>
            <div className="button_container_store">
            <div className="button_container_store">
                    <Link to="/hemostat" >
                        <button class="button_store" style={{backgroundImage: `url(${Hemostat})`, }} role="button"><h1>Tablet</h1></button>
                        <div className='text1'>aff</div>
                    </Link>
                    
                </div>
                 </div>       
                        
                    </div> : null}
                </div>
            </div>
                   
            </div>
				

				
			
			 

			

                

        )
    }
}

export default Store