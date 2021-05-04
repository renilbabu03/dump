import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter
} from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import yup from 'yup';
import AwesomeForm from 'react-formal'

// import styled from "styled-components";
import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      email: "",
      address: "",

      username: "",
      firstname: "",

      password: "",
      securitykey: ""
    };

    this.handleChange = this.handleChange.bind(this);

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  }

  // Trigger an alert on form submission
  handleSubmit = event => {
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

  get previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <Button color="secondary float-left" onClick={this._prev}>
          Previous
        </Button>
      );
    }
    return null;
  }


  get clearButton() {
    return (
      <Button color="secondary float-left" onClick={this.clearForm}>
        Clear
      </Button>
    );
    return null;
  }





  clearForm(){
    switch(this.state.currentStep){
      case 1 : this.clearStep1Form();break;
      case 2 : this.handleStep2Validation();break;
      case 3 : this.handleStep3Validation();break;
    }
  }

  clearStep1Form(){
    this.setState({
      email:"",
      address:""
    },()=>this.handleValidation())
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
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Card>
            <CardHeader>Create an Account</CardHeader>
            <CardBody>
              <CardTitle>
                <MultiStepProgressBar currentStep={this.state.currentStep} />
              </CardTitle>
              <CardText />
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                state={this.state}
     
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                state={this.state}
              
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                state={this.state}
               
              />
            </CardBody>
            <CardFooter>
              {this.previousButton}
              {this.nextButton}
              {this.clearButton}
              {this.submitButton}
            </CardFooter>
          </Card>
        </Form>
      </>
    );
  }
}

export default MasterForm;
