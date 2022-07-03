import React, {Component} from "react";
import GeneralInformationForm from "./components/GeneralInformationForm.js";
import EducationalInformationOverview from "./components/EducationalInformationOverview.js";
import PracticalExperienceForm from "./components/PracticalExperienceForm.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSection:1,
      name:"",
      email:"",
      phoneNumber:""
    }
  }

  onChange=e => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  nextSection = () => {
    if(this.state.currentSection<3) {
      console.log("AA");
      this.setState({
        currentSection:this.state.currentSection+1
      })
    }
  }

  render() {

    let currentForm;
    switch(this.state.currentSection) {
      case 1:
        currentForm = <GeneralInformationForm onChange={this.onChange}/>;
        break;
      case 2:
        currentForm = <EducationalInformationOverview />;
        break;
      case 3:
        currentForm = <PracticalExperienceForm />;
        break;
    }

    return (
      <div>
        Hello World
        {currentForm}
        
        <button type="button" onClick={this.nextSection}>Next Section</button>
      </div>
    );
  }
}


export default App;
