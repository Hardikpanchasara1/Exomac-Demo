import React, { useEffect, useState } from "react";
// import logoImg from "../../public/img/logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImg from "../img/logo.png"
import "../css/Nav.css"
import { Button } from "react-bootstrap";

const Header = () => {
  // const [sticky , setSticky] = useState(false)
  // const ChangeBg = () => {
  //   setSticky(true)
  // }

  const [scrolled, setScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remove scroll event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className={`nav-css ${scrolled ? "nav-ani" : ""}`}  fixed="top" >
        <Container>
          <Navbar.Brand href="#home"><img src={logoImg} /></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto list">
          <Nav.Link href="#home">HomePage</Nav.Link>
          <Nav.Link href="#home">About Us</Nav.Link>
          <Nav.Link href="#home">Services</Nav.Link>
          <Nav.Link href="#home">Work</Nav.Link>
          <Nav.Link href="#home">Blog</Nav.Link>
          <Nav.Link href="#home">Contact Us</Nav.Link>
          <Nav.Link href="#home"><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <button className="nav-btn">Buy Now</button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle bg-white"  />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
