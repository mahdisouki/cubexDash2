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
import React, { useContext, useEffect } from "react";
import ClientModal from "./ClientModal";
import classNames from "classnames";
import axios from "axios";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";
import Swal from "sweetalert2";
import ReactTable from "components/ReactTable/ReactTable.js";
import { GlobalState } from "GlobalState";
import ClientModalEd from "./ClientModalEd";

const dataTable = [
  ["Airi Satou", "Accountant", "Tokyo", "33"],
  ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "47"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
  ["Bradley Greer", "Software Engineer", "London", "41"],
  ["Brenden Wagner", "Software Engineer", "San Francisco", "28"],
  ["Brielle Williamson", "Integration Specialist", "New York", "61"],
  ["Caesar Vance", "Pre-Sales Support", "New York", "21"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
  ["Charde Marshall", "Regional Director", "San Francisco", "36"],
  ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "35"],
  ["Doris Wilder", "Sales Assistant", "Sidney", "23"],
  ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "48"],
  ["Garrett Winters", "Accountant", "Tokyo", "63"],
  ["Gavin Cortez", "Team Leader", "San Francisco", "22"],
  ["Gavin Joyce", "Developer", "Edinburgh", "42"],
  ["Gloria Little", "Systems Administrator", "New York", "59"],
  ["Haley Kennedy", "Senior Marketing Designer", "London", "43"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
  ["Hope Fuentes", "Secretary", "San Francisco", "41"],
  ["Howard Hatfield", "Office Manager", "San Francisco", "51"],
  ["Jackson Bradshaw", "Director", "New York", "65"],
  ["Jena Gaines", "Office Manager", "London", "30"],
  ["Jenette Caldwell", "Development Lead", "New York", "30"],
  ["Jennifer Chang", "Regional Director", "Singapore", "28"],
  ["Martena Mccray", "Post-Sales support", "Edinburgh", "46"],
  ["Michael Silva", "Marketing Designer", "London", "66"],
  ["Michelle House", "Integration Specialist", "Sidney", "37"],
  ["Olivia Liang", "Support Engineer", "Singapore", "64"],
  ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "64"],
  ["Prescott Bartlett", "Technical Author", "London", "27"],
  ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
  ["Shou Itou", "Regional Marketing", "Tokyo", "20"],
  ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
  ["Suki Burks", "Developer", "London", "53"],
  ["Tatyana Fitzpatrick", "Regional Director", "London", "19"],
  ["Timothy Mooney", "Office Manager", "London", "37"],
  ["Unity Butler", "Marketing Designer", "San Francisco", "47"],
  ["Vivian Harrell", "Financial Controller", "San Francisco", "62"],
  ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "40"],
  ["Tiger Nixon", "System Architect", "Edinburgh", "61"]
];
const handleRemove = async(id) =>{
  try {
    const res = await axios.delete(` http://45.132.240.106/admin/client/delete/${id}`); 
    console.log(res.data);
    window.location.reload();
  } catch (error) {
    console.log(error)
  }
}
const ReactTables = () => {
  const state = useContext(GlobalState)
  const Clients = state.allClients;
  const [data, setData] = React.useState([]);
  useEffect(()=>{
    if (Clients && Clients.length> 0){
      setData(
        Clients.map((prop) => {
          return {
            id: prop._id,
            name: prop.username,
            position: prop.pays,
            office: prop.email,
            age: prop.CIN,
            avance: prop.payment.avance,
            total: prop.payment.totalpayee,
            actions: (
              // we've added some custom button actions
              <div className="actions-right">
                {/* use this button to add a like kind of action */}
                <ClientModal client={prop}/>
                {/* use this button to add a edit kind of action */}

                    <ClientModalEd client ={prop}/>
                
                {/* use this button to remove the data row */}
                <Button
                  onClick={()=>handleRemove(prop._id)}
                  color="danger"
                  size="sm"
                  className={classNames("btn-icon btn-link like", {
                    "btn-neutral": prop._id < 5
                  })}
                >
                  <i className="tim-icons icon-simple-remove" />
                </Button>{" "}
              </div>
            )
          };
        })
      )
    }
    console.log(Clients)
  } , [Clients])
  return (
    <>
      <div className="content">
        <Col md={8} className="ml-auto mr-auto">
          <h2 className="text-center">Listed des clients </h2>
          <p className="text-center">
            vous pouver consulter tous les données des clients en tant administrateur 
            
          </p>
        </Col>
        <Row className="mt-5">
          <Col xs={12} md={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Listes des tables</CardTitle>
              </CardHeader>
              <CardBody>
                <ReactTable
                  data={data}
                  filterable
                  resizable={true}
                  columns={[
                    {
                      Header: "Name",
                      accessor: "name"
                    },
                    {
                      Header: "Pays/Destination",
                      accessor: "position"
                    },
                    {
                      Header: "Email",
                      accessor: "office"
                    },
                    {
                      Header: "CIN",
                      accessor: "age"
                    },
                    {
                      Header: "Avance",
                      accessor: "avance"
                    },
                    {
                      Header: "Total",
                      accessor: "total"
                    },
                    {
                      Header: "Actions",
                      accessor: "actions",
                      sortable: false,
                      filterable: false
                    }
                  ]}
                  defaultPageSize={10}
                  showPaginationTop
                  showPaginationBottom={false}
                  className="-striped -highlight"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ReactTables;
