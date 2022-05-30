import  React,{ useState } from "react";

import Form from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";
import "../styles/Login.css";
import BannerImage from '../assets/fundo.jpeg'
import {Link, useNavigate } from 'react-router-dom'





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
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
          <Link to="/">
            <Button block="true" size="lg" type="submit" disabled={!validateForm()} onClick={routeChange}>
              Login
              
              </Button> 
          </Link>

       
      </Form>
    </div>
    </div>
  );
}

