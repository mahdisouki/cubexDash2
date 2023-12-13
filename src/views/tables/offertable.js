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
import axios from "axios";
import React, { useContext, useEffect } from "react";

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
import OfferModalEd from "./OfferModalEd";

const ExtendedTables = () => {
  const state = useContext(GlobalState);
  const offers = state.allOffers;
  useEffect(()=>{
    console.log(offers)
  })
  const deleteOffer = async(id) =>{
    try {
      const res = await axios.delete(` http://45.132.240.106/admin/api/offer/${id}`);
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="content">
        <Row>
          <ol className="breadcrumb bg-transparent ml-3">
            <BreadcrumbItem>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Liste des offres 
              </a>
            </BreadcrumbItem>
          </ol>
          <Col md="12">
            <Card >
              <CardHeader>
                <CardTitle tag="h4">listes des offres</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-responsive">
                  <Table className="table-shopping" >
                    <thead>
                      <tr>
                        <th className="text-center" />
                        <th>poste</th>
                        <th>description</th>
                        <th >compétences</th>
                        <th >experience</th>
                        <th >pays</th>
                        <th >Ville</th>
                        <th >region</th>
                        <th >nbCandidat</th>
                        <th >delete offer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {offers && offers.map((item)=>(
                        <tr>
                        <td>
                          <div className="img-container">
                            <img
                              alt="..."
                              src={item.img}
                            />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="pablo" onClick={(e) => e.preventDefault()}>
                            {item.poste}
                          </a>
                          <br />
                          <small>{item.poste_id}</small>
                        </td>
                        <td>{item.description}</td>
                        <td className="">{item.compétences}</td>
                        <td className="">
                          
                          {item.experience}
                        </td>
                        <td className="">
                        {item.pays}
                        </td>
                        <td className="">
                        {item.Ville}
                          
                        </td>
                        <td className="td-actions">
                        {item.region}
                        </td>
                        <td className="">
                        {item.nbCandidat}
                          
                        </td>
                        <td className="">
                        <OfferModalEd offer={item}/>
                          
                        </td>
                        <td className="">
                        <Button onClick={()=>deleteOffer(item._id)} style={{background:"#ae0c00"}} >
                          remove
                        </Button>
                          
                        </td>
                      </tr>
                      ))}
                      
                    </tbody>
                  </Table>
                 
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ExtendedTables;
