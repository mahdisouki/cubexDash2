import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line ,Pie } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
import { GlobalState } from "GlobalState";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import {
    chartExample9,
    chartExample10
  } from "variables/charts.js"
import { useContext } from "react";
import { useEffect } from "react";


var mapData = {
  "AU": 760,
  "BR": 550,
  "CA": 120,
  "DE": 1300,
  "FR": 540,
  "GB": 690,
  "GE": 200,
  "IN": 200,
  "RO": 600,
  "RU": 300,
  "US": 292,
  "TN":250
};

const Dashboard = () => {
  const state = useContext(GlobalState);
  const stats = state.stats;
  const user = state.respInfo;
  const payment = state.clientPayments || {payeClientsCount: 0 ,totalClientsCount: 0 } ;
  const userwithVisa = state.clientwithvisa || {visaClientsCount: 0 ,totalClientsCount: 0 }; 
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  useEffect(()=>{
    console.log("stats from dashboard:" , stats)
    console.log("userwithVisa:", userwithVisa)
    console.log("user with role:" , user)
  })
  const months = [
    "2023-01",
    "2023-02",
    "2023-03",
    "2023-04",
    "2023-05",
    "2023-06",
    "2023-07",
    "2023-08",
    "2023-09",
    "2023-10",
    "2023-11",
    "2023-12"
  ];
  const clientList = (stats) =>{
    if (stats){
      const newClientsData = stats.newClientsPerMonth;
      const data = months.map(month => newClientsData[month] || 0);
      console.log("dara", data)
      return data;
    }
    else{
      return [];
    }

  }
const   data1 = (canvas) => {
    let ctx = canvas.getContext("2d");
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, "rgba(239,65,35, 0.2) ");
    gradientStroke.addColorStop(0.4, "rgba(239,65,35,0.0) ");
    gradientStroke.addColorStop(0, "rgba(239,65,35,0) ");//changed to orange colors

    
    return {
      labels:[
        "2023-01",
        "2023-02",
        "2023-03",
        "2023-04",
        "2023-05",
        "2023-06",
        "2023-07",
        "2023-08",
        "2023-09",
        "2023-10",
        "2023-11",
        "2023-12"
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#EF4123",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#EF4123",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#EF4123",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: clientList(stats)
        }
      ]
    };
  }
const data22 = {
    labels: ["visa", "en cours"],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#00c09d", "#e2e2e2"],
        borderWidth: 0,
        data: [(userwithVisa.visaClientsCount), (userwithVisa.totalClientsCount-userwithVisa.visaClientsCount)]
      }
    ]
  }
  const data33 = {
    labels: ["payée", "en cours"],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#00c09d", "#e2e2e2"],
        borderWidth: 0,
        data: [(payment.payeClientsCount), (payment.totalClientsCount-payment.payeClientsCount)]
      }
    ]
  }
  return (
    <>
      <div className="content">
        <Row>
        <Col lg="4" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div  className="info-icon text-center icon-warning">
                      <i className="tim-icons icon-single-02" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">New Clients</p>
                      <CardTitle tag="h3">{stats && stats.newClientsPerMonth[`${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}`]}</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="tim-icons icon-refresh-01" /> new clients this month 
                </div>
              </CardFooter>
            </Card>
          </Col>
          
                  {user&& user.role===1&&(
                    <Col lg="4" md="6">
                    <Card className="card-stats">
                      <CardBody>
                        <Row>
                          <Col xs="5">
                            <div className="info-icon text-center icon-primary">
                              <i className="tim-icons icon-coins" />
                            </div>
                          </Col>
                          <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">total earnings</p>
                      <CardTitle tag="h3">{stats && stats.totalsPerMonth[`${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}`]}dt</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="tim-icons icon-satisfied" /> total earnings this month 
                </div>
              </CardFooter>
            </Card>
          </Col>
                  )} 
                  
          
          <Col lg="4" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-danger">
                      <i className="tim-icons icon-satisfied" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">top users</p>
                      <CardTitle tag="h3">Mahdi Souki</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="tim-icons icon-watch-time" /> In this month
                </div>
              </CardFooter>
            </Card>
          </Col>  
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total clients</h5>
                    <CardTitle tag="h2">clients</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div  className="chart-area">
                  <Line style={{maxHeight: "100%"}}
                    data={data1}
                    
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          
         
        </Row>

          
            <Row>
          <Col className="ml-auto" md="6">
            <Card className="card-chart card-chart-pie">
              <CardHeader>
                <h5 className="card-category">nombre des clients avec visa</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="6">
                    <div className="chart-area">
                      <Pie
                        data={data22}
                        options={chartExample9.options}
                      />
                    </div>
                  </Col>
                  <Col xs="6">
                    {/* <CardTitle tag="h4">
                      <i className="tim-icons icon-trophy text-success" />{" "}
                      10.000$
                    </CardTitle>
                    <p className="category">A total of $54000</p> */}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col className="mr-auto" md="6">
            <Card className="card-chart card-chart-pie">
              <CardHeader>
                <h5 className="card-category">clients payée/en cours</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="6">
                    <div className="chart-area">
                      <Pie
                        data={data33}
                        options={chartExample10.options}
                      />
                    </div>
                  </Col>
                  <Col xs="6">
                    {/* <CardTitle tag="h4">
                      <i className="tim-icons icon-tag text-warning" /> 130,000
                    </CardTitle>
                    <p className="category">Feedback from 20.000 users</p> */}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
          <Row>
          <Col lg="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Global clients by Top Locations</CardTitle>
                <p className="card-category">number of  clients from Countries</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Table responsive>
                      <tbody>
                       
                        
                        { stats && stats.clientsPerCountry ? (
                          Object.entries(stats.clientsPerCountry).map(([country, clientCount]) => {
                          return(
                        <tr key={country}>
                          <td>
                            <div className="flag">
                              <img
                                alt="..."
                                src={require("assets/img/US.png")}
                              />
                            </div>
                          </td>
                          <td>{country}</td>
                          <td className="text-right">{clientCount}</td>
                          
                        </tr>
                          );
                        })): (<>no data available</>)}
                      </tbody>
                    </Table>
                  </Col>
                  <Col className="ml-auto mr-auto" md="6">
                    <VectorMap
                      map={"world_mill"}
                      backgroundColor="transparent"
                      zoomOnScroll={false}
                      containerStyle={{
                        width: "100%",
                        height: "300px"
                      }}
                      regionStyle={{
                        initial: {
                          fill: "#e4e4e4",
                          "fill-opacity": 0.9,
                          stroke: "none",
                          "stroke-width": 0,
                          "stroke-opacity": 0
                        }
                      }}
                      series={{
                        markers: [{
                          attribute: 'fill',
                          scale: ['#FEE5D9', '#A50F15'],
                          values: mapData,
                         
                        },{
                          attribute: 'r',
                          scale: [5, 20],
                          values: mapData,
                          
                        }],
                        regions: [
                          {
                            values: mapData,
                            scale: ["#AAAAAA", "#444444"],
                            normalizeFunction: "polynomial"
                          }
                        ]
                      }}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
