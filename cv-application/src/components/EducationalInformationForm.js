import React, {Component} from "react";

class EducationalInformationForm extends Component {

    handleChange= e => {
        if(this.props.onChange) {
            this.props.onChange(e);
        }

    }

    onSubmit =() => {
        if(this.props.onSubmit) {
            this.props.onSubmit();
            
        }
    }

    render() {
        
        return (
            <div>
                <form className="educationalInformationForm">
                    <div className="schoolName">
                        <label htmlFor="schoolName">School Name</label>
                        <input id="schoolName" value={this.props.schoolName} type="text" onChange={(e) => this.handleChange(e)}></input>
                    </div>
                    
                    <div className="titleOfStudy">
                        <label htmlFor="titleOfStudy">Title of Study</label>
                        <input id="titleOfStudy" value={this.props.titleOfStudy} type="text" onChange={(e) => this.handleChange(e)}></input>
                    </div>
                    
                    <div className="dateStudied">
                        <label htmlFor="dateStudied">Date Finished Studies</label>
                        <input id="dateStudied" value={this.props.dateStudied} type="date" onChange={(e) => this.handleChange(e)}></input>
                    </div>
                    
                    <button type="button" onClick={() => this.onSubmit()}>Create New Education</button>
                </form>
                
            </div>
        )
    }
};

export default EducationalInformationForm;