import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }
  var {state} = props;
  return (
    <>
      <p>We recommend creating a secure password for your account</p>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          value={state.password} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
      <FormGroup>
        <Label for="securitykey">securitykey</Label>
        <Input
          type="text"
          name="securitykey"
          id="securitykey"
          placeholder="Enter your securitykey"
          value={state.securitykey} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step3;
