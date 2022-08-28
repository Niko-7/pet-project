import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../styles/images/petprojectlogo_clean_icon.png";

const NavigationBar = () => {
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
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;