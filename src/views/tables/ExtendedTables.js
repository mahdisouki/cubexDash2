/*!
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
import { GlobalState } from "GlobalState";
import React, { useContext } from "react";
import axios from "axios";
// reactstrap components
import {
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Progress,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import RespModalAdd from "./RespModalAdd";
import RespModalEd from "./RespModalEd";

const ExtendedTables = () => {
  const state = useContext(GlobalState);
  const responsables = state.allUsers; 
  const handleBlock = async(id) =>{
    try {
      const res = axios.put(` http://45.132.240.106/admin/user/block/${id}`)
      console.log(res.data)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async(id) =>{
    try {
      const res = await axios.delete(` http://45.132.240.106/admin/user/deleteusers/${id}`)
      console.log(res.data)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="content">
        <Row>
          <ol className="breadcrumb bg-transparent ml-3">
            <BreadcrumbItem>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Liste des employées
              </a>
            </BreadcrumbItem>
          </ol>
          <Col md="12">
            <Card>
              <CardHeader>
                <div className="tools float-right">
                <RespModalAdd/>
                </div>
                <CardTitle tag="h4"> Liste des employées</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      
                      <th>Name</th>
                      <th>Email</th>
                      <th className="text-center">date de creation</th>
                      <th className="text-right">Is Blocked</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {responsables && responsables.map((item)=>(
                      <tr key={item._id}>
                      
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td className="text-center">{item.createdAt}</td>
                      <td className="text-right">{item.isBlocked.toString()}</td>
                      
                      <td className="text-right">
                      <Button
                          className="btn-link btn-icon"
                          color="success"
                          id="tooltip324367706"
                          size="sm"
                          onClick={()=>{handleBlock(item._id)}}
                        >
                        <i className="tim-icons icon-alert-circle-exc" />
                        </Button>
                        <RespModalEd resp ={item}/>
                        <Button
                        onClick={()=>handleDelete(item._id)}
                          className="btn-link"
                          color="danger"
                          id="tooltip974171201"
                          size="sm"
                        >
                          <i className="tim-icons icon-simple-remove" />
                        </Button>
                        
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
};

export default ExtendedTables;
