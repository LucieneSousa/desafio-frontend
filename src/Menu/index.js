import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "./menu.css";

import Logo from "./../assets/logo.svg";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand>
          <img src={Logo} alt="Logo" className="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto-menu">
            <NavItem>
              <NavLink href="#" className="menu-item">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Faq</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="border-contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
