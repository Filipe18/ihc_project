import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/background.jpeg'
import '../styles/Home.css'
import '../styles/Add_guides.css'


function Filter_device() {
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>            
            <form>
      <h1>Add Guides</h1>

      <label>
        Brand:
        <select
          name="brand"
          required>
          <option key="default"></option>
          <option>Samsung</option>
          <option>Huawei</option>
          <option>Xiaomi</option>
          <option>Asus</option>
          <option>HP</option>
          <option>Insys</option>
          <option>Dell</option>
          <option>Lenovo</option>
          <option>Other</option>
        </select>
      </label>

      <label>
        Model:
        <input
          name="model"
          type="text"
          required />
      </label>
       
       
      <button>Search</button>
  </form>
    </div>
    );
}

export default Filter_device
