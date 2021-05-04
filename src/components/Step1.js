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
const yup = require("yup");
class Step1 extends Component {
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
          </CardBody>
          <CardFooter>
            <Button color="primary float-right" onClick={this.props.nextStep}>
              Next
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  }
}
export default Step1;
