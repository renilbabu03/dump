import React, { Component }  from "react";
import { FormGroup, Label, Input } from "reactstrap";
import ReactFormal from 'react-formal';
const yup = require('yup');
class Step1 extends Component{

  state = {

  }

  constructor(props) {
    super(props);
  }

  render(){
   return <>
    <p>How can we reach you?</p>
    {/* <ReactFormal noValidate defaultValue={this.props.value}>

    </ReactFormal> */}
    <FormGroup>
      <Label for="email">Email</Label>

      <Input
        type="text"
        name="email"
        id="email"
        placeholder="Enter your Email"
        value={this.props.values.email} 
        onChange={this.props.handleChange} 
      />
    </FormGroup>
    <FormGroup>
      <Label for="address">Address</Label>
      <Input
        type="text"
        name="address"
        id="address"
        placeholder="Enter your address"
        value={this.props.address} 
        onChange={this.props.handleChange} 

      />
    </FormGroup>

  </>
  }

}
export default Step1;
