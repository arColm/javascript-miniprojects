import React, {Component} from "react";
import PracticalExperience from "./PracticalExperience";
import PracticalExperienceForm from "./PracticalExperienceForm";

class PracticalExperienceOverview extends Component {

    constructor(props) {
        super(props);

        this.state = {
            experience:[],
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
            newExperience.id=this.state.experience.length;
            this.setState({
                experience:this.state.experience.concat(newExperience),
                currentExperience: {
                    companyName:"",
                    positionTitle:"",
                    mainTasks:"",
                    startDate:"",
                    endDate:"",
                    id:this.state.experience.length+1
                }
            },() => {
                console.log(this.state.experience)
            })
        }
    }

    onDelete = id => {
        const newExperience = this.state.experience.slice();
        const index = id;
        newExperience.splice(index,1);
        //Reassign id's based on new array index
        newExperience.forEach((element,i) => {
            element["id"]=i;
        })
        this.setState({
            experience:newExperience
        })
    }

    render() {
        
        return (
            <div>
                <PracticalExperience 
                    experience={this.state.experience}
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