import React from "react";
import BannerImage from '../assets/background.jpeg'

const lookup = {
  "Samsung": [
    { id: 'Galaxy S8', text: 'Galaxy S8' },
    { id: 'Galaxy S9', text: 'Galaxy S9' },
    { id: 'Galaxy S10', text: 'Galaxy S10' }
  ],
  "Apple": [
    { id: 'Iphone 7', text: 'Iphone 7' },
    { id: 'Iphone X', text: 'Iphone X' },
    { id: 'Iphone 12', text: 'Iphone 12' }
  ]
}

class Filter_device extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: 'Apple'
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  }

  render() {
    const { dataValue } = this.state;
    const options = lookup[dataValue];
    return (
      <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>            
        <form>
          <h1>Filter</h1>
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
                required>
                <option key="default"></option>
                {options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
              </select>
            </label>
            <button>Search</button>
        </form>
      </div>
    );
  }
}
export default Filter_device;