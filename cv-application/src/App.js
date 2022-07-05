import React, {Component} from "react";
import GeneralInformationForm from "./components/GeneralInformationForm.js";
import EducationalInformationOverview from "./components/EducationalInformationOverview.js";
import PracticalExperienceOverview from "./components/PracticalExperienceOverview.js";
import Review from "./components/Review.js";

import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSection:1,
      name:"",
      email:"",
      phoneNumber:"",
      education:[],
      experience:[]
    }
  }

  onChange=e => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  nextSection = () => {
    if(this.state.currentSection<4) {
      console.log("AA");
      this.setState({
        currentSection:this.state.currentSection+1
      })
    }
  }

  prevSection = () => {
    if(this.state.currentSection>1) {
      this.setState({
        currentSection:this.state.currentSection-1
      })
    }
  }

  addEducation = newEducation => {
    this.setState({
      education:this.state.education.concat(newEducation)
    })
  }

  changeEducation = newEducation => {
    this.setState({
      education:newEducation
    })
  }

  addExperience = newExperience => {
    this.setState({
      experience:this.state.experience.concat(newExperience)
    })
  }

  changeExperience = newExperience => {
    this.setState({
      experience:newExperience
    })
  }

  render() {

    let currentForm;
    switch(this.state.currentSection) {
      case 1:
        currentForm = (
        <GeneralInformationForm 
          onChange={this.onChange}
          name={this.state.name}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}/>
        );
        break;
      case 2:
        currentForm = (
        <EducationalInformationOverview 
          changeEducation={this.changeEducation}
          addEducation={this.addEducation}
          education={this.state.education}/>
        );
        break;
      case 3:
        currentForm = (
        <PracticalExperienceOverview 
          changeExperience={this.changeExperience}
          addExperience={this.addExperience}
          experience={this.state.experience}/>
        );
        break;

      case 4:
        currentForm = (
          <Review 
            name={this.state.name}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            experience={this.state.experience}
            education={this.state.education}/>
        )
        break;
      default:
        currentForm = <h1>Welcome!</h1>
        break;
    }

    return (
      <div class="body">
        <div class="content">
          {currentForm}
        </div>
        <div class="sectionButtons">
          {this.renderPrevButton()}
          {this.renderNextButton()}
        </div>
      </div>
    );
  }

  renderNextButton = () => {
    if(this.state.currentSection<3) {
      return <button type="button" onClick={this.nextSection} className="visible">Next Section</button>
    } else if(this.state.currentSection===3) {
      return <button type="button" onClick={this.nextSection} className="visible">Review</button>
    } else if(this.state.currentSection===4) {
      return <button type="submit" className="visible">Submit</button>
    } else {
      return <button type="button" onClick={this.nextSection} className="hidden"></button>
    }
  }

  renderPrevButton = () => {
    if(this.state.currentSection>1) {
      return <button type="button" onClick={this.prevSection} className="visible">Previous Section</button>
    } else {
      return <button type="button" onClick={this.prevSection} className="hidden"></button>
    }
  }
}


export default App;
