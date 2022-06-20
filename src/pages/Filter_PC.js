import React from "react";
import BannerImage from '../assets/background.jpeg'
import {Link} from 'react-router-dom'
import '../styles/Add_guides.css'
import '../styles/Home.css'

const lookup = {
  "Lenovo": [
    { id: 'Legion_Y540', text: 'Legion Y7000'},
    { id: 'Ideapad_3', text: 'Ideapad 3'},
    { id: 'Lenovo_LegionY530', text: 'Legion Y530'}
  ],
  "Asus": [
    { id: 'VivoBook_S15', text: 'VivoBook S15'},
    { id: 'X550C', text: 'X550C'},
    { id: 'RogStrix_g15', text: 'Rog Strix G15'}
  ]
}

class Filter_device extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: 'Asus'
    }
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  }

  handleDropdownChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  render() {
    const { dataValue } = this.state;
    const options = lookup[dataValue];
    return (
      <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>            
        <form>
          <h1>Filter PC:</h1>
            <label>
            Brand:
              <select 
                onChange={this.onChange}
                name = "brand"
                required>
                <option key="default"></option>
                <option value="Asus">Asus</option>
                <option value="Lenovo">Lenovo</option>
              </select>
            </label>
            <label>
            Model:
              <select
                name = "model"
                required
                id = "dropdown"
                onChange={this.handleDropdownChange}>
                <option key="default"></option>
                {options.map(o => <option key={o.id} value={o.id} onClick={o.href}>{o.text}</option>)}
              </select>
              
            </label>
            <label>
              <Link to={`/${this.state.selectValue}`}>
                <button className="button2">
                  Search
                </button>
              </Link>
            </label>
        </form>
      </div>
    );
  }
}
export default Filter_device;