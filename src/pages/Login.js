import  React,{ useState } from "react";

import Form from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";
import '../styles/Home.css'
import BannerImage from '../assets/background.jpeg'
import {Link, useNavigate } from 'react-router-dom'
import '../styles/Add_guides.css'
import '../styles/Login.css'



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const navigate = useNavigate();
  
  const routeChange = () =>{ 
    let path = '/'; 
    navigate.push(path);
  }

  return (
    
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
    <div className="Login">
      
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <h1 class="tt1">Login</h1>
          <Form.Label class="input2">Email:</Form.Label>
          <Form.Control
           class="input1"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label class="input2">Password:</Form.Label>
          <Form.Control
           class="input1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
          <Link to="/">
            <button class="button2" block="true" type="submit" disabled={!validateForm()} onClick={routeChange}>
              Login
            </button>
            
          </Link>

       
      </Form>
    </div>
    </div>
  );
}

