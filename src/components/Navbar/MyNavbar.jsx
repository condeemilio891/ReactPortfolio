import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export const MyNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand  href="/about"><div><FontAwesomeIcon icon={faRocket} /></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#deets"></Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar> </div>
  )
}


export default MyNavbar;
