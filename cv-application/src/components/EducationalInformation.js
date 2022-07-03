import React, {Component} from "react";

class EducationalInformation extends Component {

    onDelete= id => {
        if(this.props.onDelete) {
            this.props.onDelete(id);
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
                            <button type="button" onClick={() => this.onDelete(data.id)}>Delete</button>
                        </div>
                    );
                })}
            </div>
        )
    }
};

export default Information;