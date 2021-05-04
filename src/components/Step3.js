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
class Step3 extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Card>
          <CardHeader>
           
            <p>We recommend creating a secure password for your account</p>
          </CardHeader>
          <CardBody>
            <CardText />
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
export default Step3;
