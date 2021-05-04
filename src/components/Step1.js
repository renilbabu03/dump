import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import ReactFormal from "react-formal";
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

class Step1 extends Component {
  state = {
    errors:{

    }
  };

  constructor(props) {
    super(props);

    this.handleFormChange = this.handleFormChange.bind(this)
  }

  clearForm(){
    
  }

  handleFormChange(event){
    const { name, value } = event.target;

    switch(name){
      case 'email':
        if(!value){
          this.setState({errors:{
            ...this.state.errors,
            email:"Email Required"
          }});
         
        }else{
          this.setState({errors:{
            ...this.state.errors,
            email:null
          }});
         
        }
        break;
      case 'address':
        if(!value){
          this.setState({errors:{
            ...this.state.errors,
            address:"Email Required"
          }});
         
        }else{
          this.setState({errors:{
            ...this.state.errors,
            address:null
          }});
         
        }
    }
    this.props.handleChange(event)
    
  }

  render() {
    return (
      <>
        <Card>
          <CardHeader>Create an Account</CardHeader>
          <CardBody>
            <CardText />
            <FormGroup>
              <Label for="email">Email</Label>

              <Input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Email"
                value={this.props.values.email}
                onChange={this.handleFormChange}
              />
              { this.state.errors.email && <span>Email is required</span>}
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                value={this.props.values.address}
                onChange={this.handleFormChange}
              />
            </FormGroup>
          </CardBody>
          <CardFooter>
            <Button color="primary float-left" onClick={this.props.clearForm}>
              Clear Form
            </Button>
            <Button color="primary float-right" onClick={this.props.nextStep} disabled={!this.props.values.email || !this.props.values.address}>
              Next
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  }
}
export default Step1;
