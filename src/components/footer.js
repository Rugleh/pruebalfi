import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";

import Button from "react-bootstrap/Button";

import "./footer.css";

import img1 from "../assets/images/sec6-1.png";
import img2 from "../assets/images/sec6-2.png";
import img3 from "../assets/images/sec6-3.png";
import img4 from "../assets/images/sec6-4.png";
import img5 from "../assets/images/sec6-5.png";

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col md={4}>
              <Image src={img1}></Image>
              <br></br>
              <br></br>
              <p className="white">
                My text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to mak
              </p>
            </Col>
            <Col md={4}>
              <a href="/" className="orange">
                Accesos Rápidos
              </a>
              <br></br>
              <br></br>
              <a href="/" className="white">
                Nostros
              </a>
              <br></br>
              <a href="/" className="white">
                Nuestra Oferta
              </a>
              <br></br>
              <a href="/" className="white">
                Socios
              </a>
              <br></br>
              <a href="/" className="white">
                Documentos de Interes
              </a>
              <br></br>
              <a href="/" className="white">
                Contacto
              </a>
            </Col>
            <Col md={4}>
              <p className="orange">Síguenos</p>
              <div className="rrss">
                <Image src={img2}></Image>
                <Image src={img3}></Image>
                <Image src={img4}></Image>
                <Image src={img5}></Image>
                <br></br>
                <br></br>
                
                <div class="input-group mb-12">
                  <input
                    type="text"
                    class="form-control form-control-custom"
                    placeholder="Su correo"
                    aria-label="su correo"
                    aria-describedby="basic-addon2"
                  ></input>
                  <div class="input-group-append">
                    <button class="btn btn-orange" type="button">
                      Suscríbete
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Footer;
