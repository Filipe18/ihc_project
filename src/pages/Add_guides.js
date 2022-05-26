import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from '../assets/background.jpeg'
import '../styles/Home.css'
import '../styles/Add_guides.css'


function Add_guides() {
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>            
            <form>
      <h1>Add Guides</h1>

      <label>
        Device Type:
        <select
          name="device"
          required>
          <option key="default"></option>
          <option value="phone">Phone</option>
          <option value="tablet">Tablet</option>
          <option value="smartwatch">SmartWatch</option>
          <option value="phone">PC</option>
          
        </select>
      </label>

      <label>
        Model:
        <input
          name="model"
          type="text"
          required />
      </label>

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
        Category:
        <select
          name="category"
          required>
          <option key="default"></option>
          <option>Battery Replacement</option>
          <option>Display Replacement</option>
          <option>Hard Drive Replacement</option>
          <option>Ram Replacement</option>
          <option>Other</option>
        </select>
      </label>

      <button required>Upload PDF Guide</button>
       
       
      <button>Submit</button>
  </form>
    </div>
    );
}

export default Add_guides
