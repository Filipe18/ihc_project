import BannerImage from '../assets/background.jpeg'
import '../styles/Home.css'
import '../styles/Add_guides.css'
import React,{handleSubmission,setSelectedFile,setIsSelected,selectedFile,isSelected} from "react";
import Popup from 'reactjs-popup';
import '../styles/popup.css';
import {Link} from 'react-router-dom'


const changeHandler = (event) => {
  setSelectedFile(event.target.files[0]);
  setIsSelected(true);
};

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

class Add_guides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: 'Apple'
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  }

  
    handleClick = () => {
      this.props.toggle();
    };

  



  render() {
    const { dataValue } = this.state;
    const options = lookup[dataValue];
    
    
    const handleClose2 = async e => {
      e.preventDefault();
      };
    
    
    return (
      <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>            
        <form onSubmit = {handleClose2}>
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
            <label>
            Problem:
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
            <label>Upload PDF Guide:
                <input type="file" name="file" onChange={changeHandler}></input>
		        
            
            
            </label>
            
				    <Popup trigger={<button>Add Guide</button>}>
              <div className="popup-box">
                <div className="box">    
                    <h1>
                      Your upload will be verified by our team.
                      <p>Thanks for helping the community!</p>

                      <Link to="/add_guides">
                      <button onClick >
                        Add another guide
                      </button>
                      </Link>

                      <Link to="/">
                      <button onClick>
                        Home Page
                      </button>
                      </Link>
                    </h1>
                </div>
              </div>
            </Popup>
        </form>
        
      </div>
    );
  }
}

export default Add_guides

