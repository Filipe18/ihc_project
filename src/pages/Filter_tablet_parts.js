import React from "react";
import BannerImage from '../assets/background.jpeg'
import {Link} from 'react-router-dom'
import '../styles/Add_guides.css'
import '../styles/Home.css'

const lookup = {
  "Samsung": [
    { id: 'Galaxy_tabA7', text: 'Galaxy Tab A7'},
    { id: 'Galaxy_tabS', text: 'Galaxy Tab S'},
    { id: 'Galaxy_tabS2', text: 'Galaxy Tab S2'}
  ],
  "Apple": [
    { id: 'Ipad_mini', text: 'Ipad Mini'},
    { id: 'Ipad_pro', text: 'Ipad Pro'},
    { id: 'Ipad_97', text: 'Ipad 9.7'}
  ]
}

class Filter_device extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: 'Apple'
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
          <h1>Filter Tablet:</h1>
            <label>
            Brand:
              <select 
                onChange={this.onChange}
                name = "brand"
                required>
                <option key="default"></option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
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
                <button className="Button">
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