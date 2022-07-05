import React, {Component} from "react";


class Review extends Component {

    render() {

        return (
            <div>
                <h1>Basic Information</h1>
                <div class="basicInformation">
                    <div>
                        <h3>Name</h3>
                        <h4>{this.props.name}</h4>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <h4>{this.props.email}</h4>
                    </div>
                    <div>
                        <h3>Phone Number</h3>
                        <h4>{this.props.phoneNumber}</h4>
                    </div>
                </div>

                <h1>Education</h1>
                <div class="educationalOverview">
                    {this.props.education.map((data) => {
                        return (
                            <div key={data.id}>
                                <div className="schoolName">
                                    <h3>School Name</h3>
                                    <h4>{data.schoolName}</h4>
                                </div>
                                <div className="titleOfStudy">
                                    <h3>Title of Study</h3>
                                    <h4>{data.titleOfStudy}</h4>
                                </div>
                                <div className="dateStudied">  
                                    <h3>Date of Study</h3>
                                    <h4>{data.dateStudied}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <h1>Practical Experience</h1>
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
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}


export default Review;