import React,{ Component }  from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
class Step3 extends Component{

  state = {

  }

  constructor(props) {
    super(props);
  }

  render(){
   return this.props. currentStep == 3 && <>
   <p>We recommend creating a secure password for your account</p>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          value={this.state.password} 
          // onChange={props.handleChange} 
        />
      </FormGroup>
      <FormGroup>
        <Label for="securitykey">securitykey</Label>
        <Input
          type="text"
          name="securitykey"
          id="securitykey"
          placeholder="Enter your securitykey"
          value={this.state.securitykey} 
          // onChange={props.handleChange} 
        />
      </FormGroup>
  </>
  }

}
export default Step3;
