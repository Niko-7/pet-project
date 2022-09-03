import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../styles/images/petprojectlogo_clean_icon.png";
import React from "react";

const NavigationBar = () => {
  return (
    <>
      <Navbar className="navigation-bar__navbar" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              className="navigation-bar__logo"
              alt="bussiness logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              className="text-white navigation-bar__links text-hover__effect"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className="text-white navigation-bar__links text-hover__effect"
            >
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
