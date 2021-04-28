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

// import styled from "styled-components";
import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      email: "",
      address: "",

      username: "",
      firstname: "",

      password: "",
      securitykey: "",

      errors:{
        email: "",
        address: "",
  
        username: "",
        firstname: "",
  
        password: "",
        securitykey: ""
      }
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    },()=>this.handleValidation());
    
  }

  // Trigger an alert on form submission
  handleSubmit = event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`);
  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button color="secondary float-left" onClick={this._prev}>
          Previous
        </Button>
      );
    }

    // ...else return nothing
    return null;
  }


  get clearButton() {
    return (
      <Button color="secondary float-left" onClick={this.clearForm}>
        Clear
      </Button>
    );

    // ...else return nothing
    return null;
  }



  handleValidation(){
    switch(this.state.currentStep){
      case 1 : this.handleStep1Validation();break;
      case 2 : this.handleStep2Validation();break;
      case 3 : this.handleStep3Validation();break;
    }
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



  handleStep1Validation(){
    const { email, address } = this.state;
    if(!email || !address){
      this.isFormValid = false
    }else{
      this.isFormValid = true;
    }
  }

  handleStep2Validation(){

  }

  handleStep3Validation(){

  }

  isFormValid

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <Button color="primary float-right" onClick={this._next} disabled={!this.isFormValid}>
          Next
        </Button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 2) {
      return <Button color="primary float-right">Submit</Button>;
    }
    // ...else render nothing
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
