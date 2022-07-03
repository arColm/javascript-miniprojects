import React, {Component} from "react";

class EducationalInformation extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    render() {
        
        return (
            <div>
                {this.props.education.map((data) => {
                    return (
                        <div key={data.id}>
                            <h3>School Name</h3>
                            <h4>{data.schoolName}</h4>
                            <h3>Title of Study</h3>
                            <h4>{data.titleOfStudy}</h4>
                            <h3>Date of Study</h3>
                            <h4>{data.dateStudied}</h4>
                        </div>
                    );
                })}
            </div>
        )
    }
};

export default EducationalInformation;