import React, {Component} from "react";

class PracticalExperience extends Component {

    constructor(props) {
        super(props);
    }

    onDelete = id => {
        if(this.props.onDelete){
            this.props.onDelete(id);
        }
    }

    render() {
        
        return (
            <div>
                {this.props.experience.map(element => {
                    return (
                        <div key={element.id}>
                            <h3>Company Name</h3>
                            <h4>{element.companyName}</h4>
                            <h3>Position Title</h3>
                            <h4>{element.positionTitle}</h4>
                            <h3>Main Tasks</h3>
                            <h4>{element.mainTasks}</h4>
                            <h3>Start Date</h3>
                            <h4>{element.startDate}</h4>
                            <h3>End Date</h3>
                            <h4>{element.endDate}</h4>

                            <button type="button" onClick={() => this.onDelete(element.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
};

export default PracticalExperience;