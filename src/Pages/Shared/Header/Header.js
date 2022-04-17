import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Money Mender</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={CustomLink} to="/about">
              Features
            </Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link as={CustomLink} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
