import React, { Component }  from "react";
import { FormGroup, Label, Input } from "reactstrap";

class Step1 extends Component{

  state = {

  }

  constructor(props) {
    super(props);
   
    if (props.currentStep !== 1) {
      return null;
    }
  }

  render(){
   return this.props. currentStep == 1 && <>
    <p>How can we reach you?</p>
    <FormGroup>
      <Label for="email">Email</Label>
      <Input
        type="text"
        name="email"
        id="email"
        placeholder="Enter your Email"
        value={this.state.email} 
        // style={
        //   errors.email && {
        //     'border-color': "red"
        //   }
        // }
        
      />
      {/* {errors.email && <span style={{color:"red"}}>Email is required</span>} */}
    </FormGroup>
    <FormGroup>
      <Label for="address">Address</Label>
      <Input
        type="text"
        name="address"
        id="address"
        placeholder="Enter your address"
        value={this.state.address} 

      />
    </FormGroup>
  </>
  }

}
export default Step1;
