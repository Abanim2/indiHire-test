import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';


const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="px-5 py-2 custom-header">
      <Navbar.Brand href="/">
        <img
          src="https://indihire.com/wp-content/uploads/2022/03/logo.png"
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/what-we-do" className="nav-link">What we do</Nav.Link>
          <Nav.Link href="/expertise" className="nav-link">Expertise</Nav.Link>
          <Nav.Link href="/navigate-to-your-next-opportunity" className="nav-link">Find jobs</Nav.Link>
          <Nav.Link href="/about-us" className="nav-link">About us</Nav.Link>
          <Nav.Link href="/resources" className="nav-link">Resources</Nav.Link>
          <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
