import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import  { useState } from 'react';
const Step1 = props => {
  const [errors, setErrors] = useState({
    email:null,
    address:null
  });

  if (props.currentStep !== 1) {
    return null;
  }

  var {state} = props;


  function handleChange(event){
    const { name, value } = event.target;

    switch(name){
      case "email":
        if(!value){
          errors.email = "Email Required"
        }else{
          errors.email = null;
        }
        break;
      case "address":
        if(!value){
          errors.address = "address Required"
        }else{
          errors.address = null;
        }
        break;
    }


    props.handleChange(event);


  }

  return (
    <>
      <p>How can we reach you?</p>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email"
          value={state.email} 
          style={
            errors.email && {
              'border-color': "red"
            }
          }
          onChange={handleChange} 
        />
        {errors.email && <span style={{color:"red"}}>Email is required</span>}
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input
          type="text"
          name="address"
          id="address"
          placeholder="Enter your address"
          value={state.address} // Prop: The email input data
          onChange={handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step1;
