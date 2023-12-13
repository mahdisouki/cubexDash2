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
import React, { useContext } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  UncontrolledTooltip
} from "reactstrap";
import Cookies from "js-cookie";
import { GlobalState } from "GlobalState";

const AdminNavbar = (props) => {
const state = useContext(GlobalState);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [modalSearch, setModalSearch] = React.useState(false);
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  const logoutSubmit = () =>{
    Cookies.remove("token");
    window.location.href= "/"
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setColor("bg-white");
    } else {
      setColor("navbar-transparent");
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setColor("navbar-transparent");
    } else {
      setColor("bg-white");
    }
    setCollapseOpen(!collapseOpen);
  };
  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setModalSearch(!modalSearch);
  };
  return (
    <>
      <Navbar
        className={classNames("navbar-absolute", {
          [color]: props.location.pathname.indexOf("full-screen-map") === -1
        })}
        expand="lg"
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-minimize d-inline">
              <Button
                className="minimize-sidebar btn-just-icon"
                color="link"
                id="tooltip209599"
                onClick={props.handleMiniClick}
              >
                <i className="tim-icons icon-align-center visible-on-sidebar-regular" />
                <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini" />
              </Button>
              <UncontrolledTooltip
                delay={0}
                target="tooltip209599"
                placement="right"
              >
                Sidebar toggle
              </UncontrolledTooltip>
            </div>
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened
              })}
            >
              <button
                className="navbar-toggler"
                type="button"
                onClick={props.toggleSidebar}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              {/* <InputGroup className="search-bar" tag="li">
                <Button
                  color="link"
                  data-target="#searchModal"
                  data-toggle="modal"
                  id="search-button"
                  onClick={toggleModalSearch}
                >
                  <i className="tim-icons icon-zoom-split" />
                  <span className="d-lg-none d-md-block">Search</span>
                </Button>
              </InputGroup> */}
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                >
                  <div className="notification d-none d-lg-block d-xl-block" />
                  <i className="tim-icons icon-sound-wave" />
                  <p className="d-lg-none">Notifications</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Mike John responded to your email
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      You have 5 more tasks
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Your friend Michael is in town
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Another notification
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Another one
                    </DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="photo">
                    <img alt="..." src={"data:image/jpeg;base64,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"} />
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block" />
                  <p className="d-lg-none">Log outtt</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  {/* <NavLink tag="li">
                    <DropdownItem className="nav-item">Profile</DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Settings</DropdownItem>
                  </NavLink> */}
                  <DropdownItem divider tag="li" />
                  <NavLink tag="li">
                    <button  style={{fontSize:"15px" , padding: "5px 35px" , backgroundColor: "red", borderRadius: "10px" , border: "0px" , width:"100%"}} onClick={logoutSubmit}>Logout</button>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <div className="modal-header">
          <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AdminNavbar;
