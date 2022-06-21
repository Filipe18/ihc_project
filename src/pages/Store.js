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
            <div className="text">   
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
                        <h1 class="text" >All</h1>
                <div className="button_container_store">
                    
                        <div className="button_container_store">
                    <Link to="/opening_pick" className='button34'>
                        <button class="button_store" style={{backgroundImage: `url(${Opening_pick})`,textDecoration: 'none' }} role="button"></button>
                        Opening Pick
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/spudger" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Spudger})`, }} role="button"></button>
                        Spudger
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/set_of_tools" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Set_of})`, }} role="button"></button>
                        Set of tools
                    </Link>
                    
                </div>
             
            </div>
            <div className='space'></div>
            <div className="button_container_store">
                        <div className="button_container_store">
                    <Link to="/opening_tool" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Opening})`, }} role="button"></button>
                        Opening Tool
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/plastic_cards" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Plastic})`, }} role="button"></button>
                        Plastic Cards
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/suction" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Suction})`, }} role="button"></button>
                        Suction tool
                    </Link>
                    
                </div>
             
            </div>
            <div className='space'></div>
            <div className="button_container_store">
                        <div className="button_container_store">
                    <Link to="/pentalobe" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Pentalobe})`, }} role="button"></button>
                        Pentalobe Screwdriver
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/philips_1" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Philips_1})`, }} role="button"></button>
                        Philips Screwdriver #00
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/tripoint" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Philips_1})`, }} role="button"></button>
                        Tripoint Screwdriver
                    </Link>
                    
                </div>
             
            </div>
            <div className='space'></div>
            <div className="button_container_store">
                        <div className="button_container_store">
                    <Link to="/philips_2" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Philips_1})`, }} role="button"></button>
                        Philips Screwdriver #0
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/tweezers" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Tweezers})`, }} role="button"></button>
                        Tweezers
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/tweezers_set" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Tweezers_set})`, }} role="button"></button>
                        Set of Tweezers
                    </Link>
                    
                </div>
             
            </div>
            <div className='space'></div>
            <div className="button_container_store">
                <div className="button_container_store">
                    <Link to="/spring" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Spring})`, }} role="button"></button>
                        Spring
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/hemostat" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Hemostat})`, }} role="button"></button>
                        Hemostat
                    </Link>
                    
                </div>
             
            </div>
                    </div> : null}
                    {this.state.show2 ? 
                    <div  className="comments_preview_sample">
                        <h1 class="text">Prying</h1>
            <div className="button_container_store">
            <div className="button_container_store">
                    <Link to="/opening_pick" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Opening_pick})`,textDecoration: 'none' }} role="button"></button>
                        Opening Pick
                    </Link>
                    
                </div>

                <div className="button_container_store">
                    <Link to="/spudger" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Spudger})`, }} role="button"></button>
                        Spudger
                    </Link>
                    
                </div>   
                <div className="button_container_store">
                    <Link to="/set_of_tools" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Set_of})`, }} role="button"></button>
                        Set of Tools
                    </Link>
                    
                </div>
             
                
            </div>
            <div className='space'></div>
            <div className="button_container_store">
            <div className="button_container_store">
                    <Link to="/plastic_cards" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Plastic})`, }} role="button"></button>
                        Plastic Cards
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/opening_tool" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Opening})`, }} role="button"></button>
                        Opening Tool
                    </Link>
                    
                </div>
            
            <div className="button_container_store">
                    <Link to="/suction" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Suction})`, }} role="button"></button>
                        Suction
                    </Link>
                    
                </div>
                 </div>       
                        
                    </div> : null}

                    {this.state.show3 ? 
                    <div  className="comments_preview_sample">
                        <h1 class="text">Drivers</h1>
            <div className="button_container_store">
            
                <div className="button_container_store">
                    <Link to="/pentalobe" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Pentalobe})`, }} role="button"></button>
                        Pentalobe Screwdriver
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/philips_1" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Philips_1})`, }} role="button"></button>
                        Philips Screwdriver #00
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/tripoint" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Philips_1})`, }} role="button"></button>
                        Tripoint Screwdriver
                    </Link>
                    
                </div>
            </div>
            <div className='space'></div>
            <div className="button_container_store">
            <div className="button_container_store">
                    <Link to="/philips_2" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Philips_1})`, }} role="button"></button>
                        Philips Screwdriver #0
                    </Link>
                    
                </div>
                 </div>       
                        
                    </div> : null}

                    {this.state.show4 ? 
                    <div  className="comments_preview_sample">
                        <h1 class="text">Gripping</h1>
            <div className="button_container_store">
            <div className="button_container_store">
                    <Link to="/tweezers" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Tweezers})`, }} role="button"></button>
                        Tweezers
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/tweezers_set" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Tweezers_set})`, }} role="button"></button>
                        Set of Tweezers
                    </Link>
                    
                </div>
                <div className="button_container_store">
                    <Link to="/spring" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Spring})`, }} role="button"></button>
                        Spring
                    </Link>
                    
                </div>
            </div>
            <div className='space'></div>
            <div className="button_container_store">
            <div className="button_container_store">
                    <Link to="/hemostat" className='button34' >
                        <button class="button_store" style={{backgroundImage: `url(${Hemostat})`, }} role="button"></button>
                        Hemostat
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