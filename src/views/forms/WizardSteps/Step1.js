/*!

=========================================================
* Black Dashboard PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

const Step1 = React.forwardRef((props, ref) => {
  // eslint-disable-next-line
  const [firstname, setfirstname] = React.useState("");
  // eslint-disable-next-line
  const [lastname, setlastname] = React.useState("");
  // eslint-disable-next-line
  const [email, setemail] = React.useState("");
 
  // eslint-disable-next-line
  const [phone, setphone] = React.useState("");
 


  /*eslint-disable-next-line*/

 
  return (
    <>
      <h5 className="info-text">
        Let's start with the basic information (with validation)
      </h5>
      <Row className="justify-content-center mt-5">
        <Col sm="5">
          <InputGroup
           
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-single-02" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name="firstname"
              placeholder="First Name..."
              type="text"
              
            />
            
          </InputGroup>
          <InputGroup
           
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-email-85" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name="email"
              placeholder="Email..."
              type="email"
              
            />
            
          </InputGroup>
        </Col>
        <Col sm="5">
          <InputGroup
            
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-caps-small" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name="lastname"
              placeholder="Last Name..."
              type="text"
              
            />
          
          </InputGroup>
          <InputGroup
            
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-mobile" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name="number"
              placeholder="Phone..."
              type="number"
              
            />
            
          </InputGroup>
        </Col>
        <Col sm="10">
          <InputGroup
           
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-square-pin" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name="address"
              placeholder="Address"
              type="text"
              
            />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
});

export default Step1;
