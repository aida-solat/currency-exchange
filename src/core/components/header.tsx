import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg='wite' expand='lg'>
      <Container className='header' fluid>
        <Navbar.Brand href='/'>
          <img alt='' src='/logo.png' className='d-inline-block align-top' />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='links me-auto' activeKey='/'>
            <Nav.Link href='/'>CURRENCY CONVERTER</Nav.Link>
            <Nav.Link href='#link'>VIEW CONVERSION HISTORY</Nav.Link>
          </Nav>
          <Navbar.Collapse className='logout justify-content-end'>
            <Navbar.Text style={logout}>LOGOUT</Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const logout = {
  color: "#009688",
  fontWeight: "bold",
  fontSize: "14px",
  FontFace: "Roboto",
};

export default Header;
