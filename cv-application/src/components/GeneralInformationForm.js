import React, {Component} from "react";
import "../css/GeneralInformationForm.css";

class GeneralInformationForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:"",
            email:"",
            phoneNumber:""
        }
    }

    handleChange = (e) => {
        if(this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render() {
        
        return (
            <div>
                <form>
                    <div>   
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" value={this.props.name} onChange={(e) => this.handleChange(e)}></input>
                    </div>
                    

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={this.props.email} onChange={(e) => this.handleChange(e)}></input>
                    </div>
                    

                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" value={this.props.phoneNumber} onChange={(e) => this.handleChange(e)}></input>
                    </div>
                </form>
            </div>
        )
    }
};

export default GeneralInformationForm;