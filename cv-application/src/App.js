import React, {Component} from "react";
import GeneralInformationForm from "./components/GeneralInformationForm.js";
import EducationalInformationForm from "./components/EducationalInformationForm.js";
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
    this.onChange = this.onChange.bind(this);
  }

  onChange(data) {
    for(const property in data) {
      this.setState({
        [property]:data[property]
      })
      console.log(this.state);
    }
  }

  render() {

    let currentForm;
    switch(this.state.currentSection) {
      case 1:
        currentForm = <GeneralInformationForm onChange={this.onChange}/>;
        break;
      case 2:
        currentForm = <EducationalInformationForm />;
        break;
      case 3:
        currentForm = <PracticalExperienceForm />;
        break;
    }

    return (
      <div>
        Hello World
        {currentForm}
        
        <button type="button">Next Section</button>
      </div>
    );
  }
}


export default App;
