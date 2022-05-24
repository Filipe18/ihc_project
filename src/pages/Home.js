//import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/background4.jpg'
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
                <h1>Self-Repair</h1>
            </div>

 
        </div>
    )
}

export default Home


