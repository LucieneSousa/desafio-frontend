import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./menu.css";

import Logo from "./../assets/logo.svg";

const Menu = (props) => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand>
          <img src={Logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto-menu">
            <Nav.Item>
              <Nav.Link href="#" className="menu-item">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Product</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Faq</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="border-contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
