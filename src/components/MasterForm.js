import React, { Component } from "react";
import {
  Button
} from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";


import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
  state = {
    currentStep: 1,

    email: "",
    address: "",

    username: "",
    firstname: "",

    password: "",
    securitykey: ""
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);

    this.clearStep1Form = this.clearStep1Form.bind(this);
    this.clearStep2Form = this.clearStep2Form.bind(this);
    this.clearStep3Form = this.clearStep3Form.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
  };

  _next() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  clearStep1Form(){
      this.setState({
        email:"",
        address:""
      })
  }

  clearStep2Form(){
    this.setState({
      username:"",
      firstname:""
    })
  }

  clearStep3Form(){
    this.setState({
      password: "",
      securitykey: ""
    })
  }


  render() {
    const {
      email,
      address,
      username,
      firstname,
      password,
      securitykey,
    } = this.state;

    const values = {
      email,
      address,
      username,
      firstname,
      password,
      securitykey
    };
    const { currentStep } = this.state;
    return (
      <>
        <div className="progress-bar">
          <MultiStepProgressBar currentStep={this.state.currentStep} />
        </div>

        {currentStep == 1 && (

          <Step1
            handleChange={this.handleChange}
            values={values}
            nextStep={this._next}
            prevStep={this._prev}
            clearForm={this.clearStep1Form}
          />

        )}
        {currentStep == 2 && (
          <Step2
            nextStep={this._next}
            prevStep={this._prev}
            handleChange={this.handleChange}
            values={values}
            clearForm={this.clearStep2Form}
          />
        )}
        {currentStep == 3 && (
          <Step3
            nextStep={this._next}
            prevStep={this._prev}
            handleChange={this.handleChange}
            clearForm={this.clearStep3Form}
            values={values}
          />
        )}
      </>
    );
  }
}

export default MasterForm;
