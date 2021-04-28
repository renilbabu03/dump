import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }
  var {state} = props;
  return (
    <>
      <p>What should we call you?</p>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your Username"
          value={state.username} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
      <FormGroup>
        <Label for="firstname">firstname</Label>
        <Input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter your firstname"
          value={state.firstname} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step2;
