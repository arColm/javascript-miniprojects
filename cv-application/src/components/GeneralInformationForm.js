import React, {Component} from "react";

class GeneralInformationForm extends Component {

    constructor(props) {
        super(props);

        this.reset();
    }

    reset= () => {
        this.setState({
            name:"",
            email:"",
            phoneNumber:""
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        }, () => {
            if(this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
    }

    render() {
        
        return (
            <div>
                <form>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" onChange={(e) => this.handleChange(e)}></input>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(e) => this.handleChange(e)}></input>

                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="number" id="phoneNumber" onChange={(e) => this.handleChange(e)}></input>

                </form>
            </div>
        )
    }
};

export default GeneralInformationForm;