import React, {Component} from "react";

class PracticalExperience extends Component {

    onDelete = id => {
        if(this.props.onDelete){
            this.props.onDelete(id);
        }
    }

    render() {
        
        return (
            <div className="practicalOverview">
                {this.props.experience.map(element => {
                    return (
                        <div key={element.id}>
                            <div className="companyName">
                                <h3>Company Name</h3>
                                <h4>{element.companyName}</h4>
                            </div>
                            <div className="positionTitle">
                                <h3>Position Title</h3>
                                <h4>{element.positionTitle}</h4>
                            </div>
                            <div className="mainTasks">
                                <h3>Main Tasks</h3>
                                <h4>{element.mainTasks}</h4>
                            </div>
                            <div className="start">
                                <h3>Start Date</h3>
                                <h4>{element.startDate}</h4>
                            </div>
                            <div className="end">
                                <h3>End Date</h3>
                                <h4>{element.endDate}</h4>
                            </div>
                            <button type="button" onClick={() => this.onDelete(element.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
};

export default PracticalExperience;