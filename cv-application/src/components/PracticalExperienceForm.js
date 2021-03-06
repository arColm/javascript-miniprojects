import React, {Component} from "react";

class PracticalExperienceForm extends Component {
    handleChange = e => {
        if(this.props.onChange) {
            this.props.onChange(e);
        }
    }

    onSubmit = () => {
        if(this.props.onSubmit) {
            this.props.onSubmit();
        }
    }

    render() {
        
        return (
            <div>
                <form class="practicalExperienceForm">
                    <div className="companyName">
                        <label htmlFor="companyName">Company Name</label>
                        <input id="companyName" type="text" value={this.props.companyName} onChange={e => this.handleChange(e)}></input>
                    </div>
                    <div className="positionTitle">
                        <label htmlFor="positionTitle">Position Title</label>
                        <input id="positionTitle" type="text" value={this.props.positionTitle} onChange={e => this.handleChange(e)}></input>
                    </div>
                    <div className="mainTasks">
                        <label htmlFor="mainTasks">Main Tasks</label>
                        <textarea id="mainTasks" value={this.props.mainTasks} onChange={e => this.handleChange(e)}></textarea>
                    </div>
                    <div className="startDate">
                        <label htmlFor="startDate">Start Date</label>
                        <input id="startDate" type="date" value={this.props.startDate} onChange={e => this.handleChange(e)}></input>
                    </div>
                    <div className="endDate">
                        <label htmlFor="endDate">End Date</label>
                        <input id="endDate" type="date" value={this.props.endDate} onChange={e => this.handleChange(e)}></input>
                    </div>
                    <button type="button" onClick={() => this.onSubmit()}>Submit</button>
                </form>
            </div>
        )
    }
};

export default PracticalExperienceForm;