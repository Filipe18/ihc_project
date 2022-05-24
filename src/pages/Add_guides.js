import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/background4.jpg'
import '../styles/Home.css'
import countries from "./countries";
import './style.css'


function Add_guides() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [acceptedTerms, setAcceptedTerms] = React.useState(false);

    const handleSubmit = (event) => {
        console.log(`
        Email: ${email}
        Password: ${password}
        Country: ${country}
        Accepted Terms: ${acceptedTerms}
        `);

        event.preventDefault();
  }

    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>            
            <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>

      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>

      <label>
        Country:
        <select
          name="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
          required>
          <option key=""></option>
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </label>

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service
      </label>

      <button>Submit</button>
    </form>
    </div>
    );
}

export default Add_guides
