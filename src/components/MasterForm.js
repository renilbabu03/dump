import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import yup from "yup";
import AwesomeForm from "react-formal";

// import styled from "styled-components";
import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
  state = {
    currentStep: 1,
    email: "",
    address: "",

    username: "",
    firstname: "",

    password: "",
    securitykey: "",
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.clearForm = this.clearForm.bind(this);
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
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }


  clearForm() {
    switch (this.state.currentStep) {
      case 1:
        this.clearStep1Form();
        break;
      case 2:
        this.handleStep2Validation();
        break;
      case 3:
        this.handleStep3Validation();
        break;
    }
  }

  clearStep1Form() {
    this.setState(
      {
        email: "",
        address: "",
      },
      () => this.handleValidation()
    );
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <Button color="primary float-right" onClick={this._next}>
          Next
        </Button>
      );
    }
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep > 2) {
      return <Button color="primary float-right">Submit</Button>;
    }
    return null;
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
      securitykey,
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
          />
        )}
        {currentStep == 2 && (
          <Step2
            nextStep={this._next}
            prevStep={this._prev}
            handleChange={this.handleChange}
            values={values}
          />
        )}
        {currentStep == 3 && (
          <Step3
            nextStep={this._next}
            prevStep={this._prev}
            handleChange={this.handleChange}
            values={values}
          />
        )}
      </>
    );
  }
}

export default MasterForm;
