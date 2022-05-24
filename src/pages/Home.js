//import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/background.jpeg'
import '../styles/Home.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import ListGroup from 'react-bootstrap/ListGroup'



function Home() {

    
    return (
        <div className="home"  style={{backgroundImage: `url(${BannerImage})`}} >
            <div className="headerContainer">
                <h1>What are you trying to fix?</h1>
            </div>
            <div className="button_container">
                <button class="button_phone" role="button">Phones</button>
                <button class="button_tablet" role="button">Tablets</button>
                <button class="button_pc" role="button">PCs</button>
                <button class="button_watch" role="button">SmartWatches</button>
                {/* <button class="button_phone" role="button">phones</button>
                <button class="button_phone" role="button">phones</button> */}
            </div>
 
        </div>
        
    )
}

export default Home


