import React, {Component} from "react";

class EducationalInformationForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            schoolName:"",
            titleOfStudy:"",
            dateStudied:""
        }
    }

    handleChange= e => {
        this.setState({
            [e.target.id]:e.target.value
        }, () => {
            if(this.props.onChange) {
                this.props.onChange(e);
                console.log(this.state);
            }
        })

    }

    onSubmit = async () => {
        const {schoolName, titleOfStudy, dateStudied} = this.state;
        if(schoolName!=="" && titleOfStudy!=="" && dateStudied!=="") {
            if(this.props.onSubmit) {
                await this.props.onSubmit();

                this.setState({
                    schoolName:"",
                    titleOfStudy:"",
                    dateStudied:""
                })
            }
        }
    }

    render() {
        
        return (
            <div>
                <label htmlFor="schoolName">School Name</label>
                <input id="schoolName" value={this.state.schoolName} type="text" onChange={(e) => this.handleChange(e)}></input>
                
                <label htmlFor="titleOfStudy">Title of Study</label>
                <input id="titleOfStudy" value={this.state.titleOfStudy} type="text" onChange={(e) => this.handleChange(e)}></input>

                <label htmlFor="dateStudied">Date Finished Studies</label>
                <input id="dateStudied" value={this.state.dateStudied} type="date" onChange={(e) => this.handleChange(e)}></input>

                <button type="button" onClick={() => this.onSubmit()}>Create New Education</button>
            </div>
        )
    }
};

export default EducationalInformationForm;