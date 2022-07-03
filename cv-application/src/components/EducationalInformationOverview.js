import React, {Component} from "react";
import EducationalInformationForm from "./EducationalInformationForm";
import EducationalInformation from "./EducationalInformation";

class EducationalInformationOverview extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            education:[],
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
            this.setState({
                education:this.state.education.concat(currentEducation),
                currentEducation: {
                    schoolName:"",
                    titleOfStudy:"",
                    dateStudied:"",
                    id:this.state.education.length
                }
            }, () => {

                console.log(this.state);    
            })
        }
    }

    render() {
        
        return (
            <div>
                <EducationalInformation education={this.state.education} />
                <EducationalInformationForm onChange={e => this.onChange(e)} onSubmit={() => this.onSubmit()}/>
                
            </div>
        )
    }
};

export default EducationalInformationOverview;