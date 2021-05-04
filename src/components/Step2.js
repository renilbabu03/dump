import React, { Component }  from "react";
import { FormGroup, Label, Input } from "reactstrap";


class Step2 extends Component{

  state = {

  }

  constructor(props) {
    super(props);
  }

  render(){
   return <>
    <p>How can we reach you?</p>
    <FormGroup>
        <Label for="username">Username</Label>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your Username"
          value={this.state.username} 
          // onChange={props.handleChange} 
        />
      </FormGroup>
      <FormGroup>
        <Label for="firstname">firstname</Label>
        <Input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter your firstname"
          value={this.state.firstname} 
          // onChange={props.handleChange} 
        />
      </FormGroup>
  </>
  }

}
export default Step2;
