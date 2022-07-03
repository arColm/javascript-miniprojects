import React, {Component} from "react";
import EducationalInformationForm from "./EducationalInformationForm";
import EducationalInformation from "./EducationalInformation";

import "../css/EducationalInformationOverview.css";

class EducationalInformationOverview extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            currentEducation: {
                schoolName:"",
                titleOfStudy:"",
                dateStudied:"",
                id:0
            }
        }
    }

    onChange= e => {
        let newCurrentEducation = Object.assign({},this.state.currentEducation);
        newCurrentEducation[(e.target.id)] = e.target.value;
        this.setState({
            currentEducation:newCurrentEducation
        })

    }

    onSubmit = () => {
        let {currentEducation} = this.state;
        if(currentEducation["schoolName"]!=="" && currentEducation["titleOfStudy"]!=="" && currentEducation["dateStudied"]!=="") {
            const newEducation = Object.assign({},currentEducation);
            newEducation.id=this.props.education.length;
            this.props.addEducation(newEducation);

            this.setState({
                currentEducation: {
                    schoolName:"",
                    titleOfStudy:"",
                    dateStudied:"",
                    id:this.props.education.length+1
                }
            })
        }
    }

    onDelete= (id) => {
        //Remove the education with given id from list.
        const newEducation = this.props.education.slice();
        const index = id;
        newEducation.splice(index,1);
        //Reassign id's based on new array index
        newEducation.forEach((element,i) => {
            element["id"]=i;
        })

        this.props.changeEducation(newEducation);
    }

    
    render() {
        
        return (
            <div>
                <EducationalInformation 
                    education={this.props.education}
                    onDelete={() => this.onDelete()} />
                <EducationalInformationForm 
                    schoolName={this.state.currentEducation["schoolName"]}
                    titleOfStudy={this.state.currentEducation["titleOfStudy"]}
                    dateStudied={this.state.currentEducation["dateStudied"]}
                    onChange={e => this.onChange(e)} 
                    onSubmit={() => this.onSubmit()}/>
                
            </div>
        )
    }
};

export default EducationalInformationOverview;