import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

Header.defaultProps = {
  title: "Your title",
};

Header.propTypes = {
  title: PropTypes.string,
};
