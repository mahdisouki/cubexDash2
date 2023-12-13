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
import React, { useState } from "react";
// react plugin used to create a form with multiple steps
import axios from "axios";
// wizard steps
import Step1 from "./WizardSteps/Step1.js";
import Step2 from "./WizardSteps/Step2.js";
import Step3 from "./WizardSteps/Step3.js";
import {
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import Cookies from "js-cookie";

const Wizard = () => {
  const token = Cookies.get('token');
  const [formData, setFormData] = useState({
    username: "",
    CIN: "",
    email: "",
    password: "",
    profileImg: "",
    cinImg: "",
    passportImg: "",
    documentCnss: "",
    cv: "",
    diplomeImg: "",
    pays: "",
    dureeContrat: "",
    typeContrat: "",
    domaine: "",
    payment: {
      avance: 0,
      totalpayee: 0,
      statusPayment: 0,
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formdata:",formData);
    try {
      const res = await axios.post(
        "http://45.132.240.106/admin/client/register",formData,{headers : {Authorization : `Bearer ${token}`}}
        
      );
      console.log(res.data);
      window.location.href = '/admin/react-tables'
    } catch (error) {
      console.log(error);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, [e.target.name]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Ajouter un nouvel client</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label for="exampleEmail">username</Label>
                        <Input
                          id="exampleEmail"
                          name="username"
                          placeholder="with a placeholder"
                          type="text"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              username: e.target.value,
                            })
                          }
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleEmail">cin</Label>
                        <Input
                          id="exampleEmail"
                          name="CIN"
                          placeholder="with a placeholder"
                          type="text"
                          onChange={(e) =>
                            setFormData({ ...formData, CIN: e.target.value })
                          }
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleEmail">email</Label>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="with a placeholder"
                          type="email"
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleEmail">password</Label>
                        <Input
                          id="exampleEmail"
                          name="password"
                          placeholder="with a placeholder"
                          type="text"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleEmail">pays</Label>
                        <Input
                          id="exampleEmail"
                          name="password"
                          placeholder="with a placeholder"
                          type="text"
                          onChange={(e) =>
                            setFormData({ ...formData, pays: e.target.value })
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">durée du contrat</Label>
                        <Input
                          id="exampleEmail"
                          name="password"
                          placeholder="with a placeholder"
                          type="text"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              dureeContrat: e.target.value,
                            })
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">type du contrat:</Label>
                        <Input
                          id="exampleEmail"
                          name="password"
                          placeholder="with a placeholder"
                          type="text"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              typeContrat: e.target.value,
                            })
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">domaine:</Label>
                        <Input
                          id="exampleEmail"
                          name="password"
                          placeholder="with a placeholder"
                          type="text"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              domaine: e.target.value,
                            })
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">avance</Label>
                        <Input
                          id="exampleEmail"
                          name="password"
                          placeholder="with a placeholder"
                          type="text"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              payment: {
                                ...formData.payment,
                                avance: e.target.value,
                              },
                            })
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">status payment</Label>
                        <Input
                          id="exampleEmail"
                          name="password"
                          placeholder="with a placeholder"
                          type="text"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              payment: {
                                ...formData.payment,
                                statusPayment: e.target.value,
                              },
                            })
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">total à payer</Label>
                        <Input
                          id="exampleEmail"
                          name="password"
                          placeholder="with a placeholder"
                          type="text"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              payment: {
                                ...formData.payment,
                                totalpayee: e.target.value,
                              },
                            })
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="exampleEmail">profileImg(png)</Label>
                        <Input
                          style={{
                            display: "block",
                            opacity: "100%",
                            position: "static",
                          }}
                          id="exampleEmail"
                          name="profileImg"
                          placeholder="with a placeholder"
                          type="file"
                          onChange={handleImageChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">cinImg(pdf)</Label>
                        <Input
                          style={{
                            display: "block",
                            opacity: "100%",
                            position: "static",
                          }}
                          id="exampleEmail"
                          name="cinImg"
                          placeholder="with a placeholder"
                          type="file"
                          onChange={handleImageChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">passportImg(pdf)</Label>
                        <Input
                          style={{
                            display: "block",
                            opacity: "100%",
                            position: "static",
                          }}
                          
                          name="passportImg"
                          placeholder="with a placeholder"
                          type="file"
                          onChange={handleImageChange}
                          
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">documentCnss(pdf)</Label>
                        <Input
                          style={{
                            display: "block",
                            opacity: "100%",
                            position: "static",
                          }}
                          id="exampleEmail"
                          name="documentCnss"
                          placeholder="with a placeholder"
                          type="file"
                          onChange={handleImageChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">cv(pdf)</Label>
                        <Input
                          style={{
                            display: "block",
                            opacity: "100%",
                            position: "static",
                          }}
                          id="exampleEmail"
                          name="cv"
                          placeholder="with a placeholder"
                          type="file"
                          onChange={handleImageChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">diplomeImg(pdf)</Label>
                        <Input
                          style={{
                            display: "block",
                            opacity: "100%",
                            position: "static",
                          }}
                          id="exampleEmail"
                          name="diplomeImg"
                          placeholder="with a placeholder"
                          type="file"
                          onChange={handleImageChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <CardFooter className="text-right">
                    <Button type="submit" color="primary">
                      submit
                    </Button>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Wizard;
