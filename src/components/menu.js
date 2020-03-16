import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./menu.css";

// images
import Logo from "../assets/images/irade.png";

class Menu extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link className="black menu-link">NOSOTROS</Nav.Link>
            <Nav.Link className="black menu-link">NUESTRA OFERTA</Nav.Link>
            <Nav.Link className="black menu-link">SOCIOS</Nav.Link>
            <Nav.Link className="black menu-link">
              DOCUMENTOS DE INTERES
            </Nav.Link>
            <Nav.Link className="black menu-link">CONTACTO</Nav.Link>
            <Nav.Link>
              <Button variant="warning white">POSTULA EN LINEA</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;
