import React from "react";
import Logo from "../images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ShuffleIcon from "@material-ui/icons/Shuffle";

import { Container, Row, Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function NavigationBar() {
  return (
    <Container fluid style={{ marginBottom: "50px" }}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" style={{ width: "150px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" style={{ marginLeft: "90px" }}>
                Services
              </Nav.Link>
              <Nav.Link href="#link" style={{ marginLeft: "70px" }}>
                Product
              </Nav.Link>
              <Nav.Link href="#link" style={{ marginLeft: "70px" }}>
                Technology
              </Nav.Link>
              <NavDropdown
                title="About"
                id="basic-nav-dropdown"
                style={{ marginLeft: "70px" }}
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Client"
                id="basic-nav-dropdown"
                style={{ marginLeft: "70px" }}
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home" style={{ marginLeft: "70px" }}>
                Partner
              </Nav.Link>
              <Nav.Link href="#home" style={{ marginLeft: "70px" }}>
                <HomeIcon />
              </Nav.Link>
              <Nav.Link href="#home">
                <MailOutlineIcon />
              </Nav.Link>
              <Nav.Link href="#home">
                <ShuffleIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavigationBar;
