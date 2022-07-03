import React, {Component} from "react";
import PracticalExperience from "./PracticalExperience";
import PracticalExperienceForm from "./PracticalExperienceForm";

class PracticalExperienceOverview extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentExperience: {
                companyName:"",
                positionTitle:"",
                mainTasks:"",
                startDate:"",
                endDate:"",
                id:0
            }
        }
    }

    onChange =e => {

        let newCurrentExperience = Object.assign({},this.state.currentExperience);
        newCurrentExperience[(e.target.id)] = e.target.value;
        this.setState({
            currentExperience:newCurrentExperience
        })
    }

    onSubmit = () => {
        const {companyName,positionTitle,mainTasks,startDate,endDate} = this.state.currentExperience;
        if(companyName!==""&&positionTitle!==""&&mainTasks!==""&&startDate!==""&&endDate!=="") {
            const newExperience = Object.assign({},this.state.currentExperience);
            newExperience.id=this.props.experience.length;

            this.props.addExperience(newExperience);
            this.setState({
                currentExperience: {
                    companyName:"",
                    positionTitle:"",
                    mainTasks:"",
                    startDate:"",
                    endDate:"",
                    id:this.props.experience.length+1
                }
            })
        }
    }

    onDelete = id => {
        const newExperience = this.props.experience.slice();
        const index = id;
        newExperience.splice(index,1);
        //Reassign id's based on new array index
        newExperience.forEach((element,i) => {
            element["id"]=i;
        })
        this.props.changeExperience(newExperience);
    }

    render() {
        
        return (
            <div>
                <PracticalExperience 
                    experience={this.props.experience}
                    onDelete={this.onDelete}/>
                <PracticalExperienceForm 
                    companyName={this.state.currentExperience["companyName"]}
                    positionTitle={this.state.currentExperience["positionTitle"]}
                    mainTasks={this.state.currentExperience["mainTasks"]}
                    startDate={this.state.currentExperience["startDate"]}
                    endDate={this.state.currentExperience["endDate"]}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}/>
            </div>
        )
    }
};

export default PracticalExperienceOverview;