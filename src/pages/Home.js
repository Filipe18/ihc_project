//import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/fundo.jpeg'
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
                <button class="button_phone" role="button"></button>
                <button class="button_tablet" role="button"></button>
                <button class="button_pc" role="button"></button>
                <button class="button_watch" role="button"></button>
                {/* <button class="button_phone" role="button">phones</button>
                <button class="button_phone" role="button">phones</button> */}
            </div>

            <div className="aboutSection">
                <h1>About us</h1>

            </div>
 
        </div>
        
    )
}

export default Home


