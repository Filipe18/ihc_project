import BannerImage from '../assets/background.jpeg'
import '../styles/Home.css'
import '../styles/Add_guides.css'
import React,{handleSubmission,setSelectedFile,setIsSelected,selectedFile,isSelected} from "react";
import Popup from 'reactjs-popup';
import '../styles/popup.css';
import { Link } from 'react-router-dom';
const changeHandler = (event) => {
  setSelectedFile(event.target.files[0]);
  setIsSelected(true);
};
const handleClose2 = async e => {
    e.preventDefault();
    };
class Ask_Guide extends React.Component {
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
    return (
      <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>            
        <form onSubmit = {handleClose2}>
          <h1>Ask for a guide</h1>

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
                <input type="text" id="brand" />
            </label>
            <label>
            Model:
                <input type="text" name="model" />
            </label>
            <label>
            Category:
                <input type="text" name="category" />
            </label>
            <Popup trigger={<button>Request</button>}>
              <div className="popup-box">
                <div className="box">
                    <h1>
                     Our team will take a look to your request.
                      <p>Thanks for using our services!</p>

                      <Link to="/ask_guide">
                      <button onClick>
                        Re-enter data
                      </button>
                      </Link>

                      <Link to="/">
                      <button onClick>
                        Done
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



export default Ask_Guide