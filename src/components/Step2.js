import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";
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

class Step2 extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Card>
          <CardHeader>Create an Account</CardHeader>
          <CardBody>
            <CardText />
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
          </CardBody>
          <CardFooter>
            <Button color="primary float-left" onClick={this.props.prevStep}>
              Previous
            </Button>
            <Button color="primary float-right" onClick={this.props.nextStep}>
              Next
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  }
}
export default Step2;
