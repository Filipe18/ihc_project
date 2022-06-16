import '../styles/Home.css'
import '../styles/Add_guides.css'
import React from "react";
import '../styles/popup.css';




class Test extends React.Component {

    constructor() {

        super();

        this.showComments = this.showComments.bind(this);
		this.showComments1 = this.showComments1.bind(this);

        this.state = {

            showComponent: false,
        };

    }


    showComments(e) {
        this.setState({
            showIphone6: e.target.checked,
        });
    }
	showComments1(e) {
        this.setState({
			showIphone8: e.target.checked,
        });
    }

    render() {

           return (

			
<div className="add_checkbox">

                   <input className="checkbox" type="checkbox" name="enable_comment" onClick={this.showComments} value="enable_comment"/>
				   <input className="checkbox" type="checkbox" name="enable_comment" onClick={this.showComments1} value="enable_comment"/>
                {this.state.showIphone6 ? <div  className="comments_preview_sample">Hello</div> : null}
				 {this.state.showIphone8 ? <div  className="comments_preview_sample">Hello1</div> : null}
                </div>
				

				
			
			 

			

                

        )
    }
}

export default Test