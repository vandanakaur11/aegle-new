import React, { useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../style/Navbar.scss";

function NavbarComponent({ theme }) {
  return (
    <div className={`__Navbar ${theme === "dark" ? "dark" : "light"}`}>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Link to="/">
            <div className="logoWrapper" id="logoWrapper">
              <img
                className="logo"
                src="https://aeglehealthpartners.com/wp-content/uploads/2020/12/logo-header-cropped.png"
                alt="Logo"
              />
            </div>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-links-left">
              <Link to="/whatIsAegle" className="left nav-link">
                What is Aegle
              </Link>
              <Link to="/HowAegleWorks" className="left nav-link">
                How Aegle Works
              </Link>

              <Link to="/simulateAegle" className="left nav-link">
                Simulate Aegle
              </Link>

              <Link to="/About" className="left nav-link">
                About Aegle
              </Link>
              {/* <DropdownButton
                as={ButtonGroup}
                title="About Aegle"
                className="left dropdown"
              >
                <Dropdown.Item
                  eventKey="1"
                  to="/About"
                  className="dropdownItem"
                >
                  About
                </Dropdown.Item>

                <Dropdown.Item eventKey="2" className="dropdownItem">
                  Careers
                </Dropdown.Item>
                <Dropdown.Item eventKey="3" className="dropdownItem">
                  Support
                </Dropdown.Item>
                <Dropdown.Item eventKey="4" className="dropdownItem">
                  Contact us
                </Dropdown.Item>
              </DropdownButton> */}
            </Nav>
            <Nav className="ms-auto navbar-links-right">
              <Link to="/SimulateAegle" className="right">
                Login
              </Link>
              <Link to="/SimulateAegle" className="right fill">
                Request Pricing
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
