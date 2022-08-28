import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../styles/images/petprojectlogo_clean_icon.png";
import React from "react";
import { useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();

  return (
    <>
      <Navbar className="navigation-bar__navbar">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              className="navigation-bar__logo"
              alt="bussiness logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white navigation-bar__links">
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className="text-white navigation-bar__links"
            >
              About
            </Nav.Link>
            {location.pathname === "/" && (
              <Nav.Link
                href="#brands"
                className="text-white navigation-bar__links"
              >
                Brands
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
