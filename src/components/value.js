import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";


import img1 from "../assets/images/sec2-1.png";
import img2 from "../assets/images/sec2-2.png";
import img3 from "../assets/images/sec2-3.png";
import img4 from "../assets/images/sec2-4.png";
import img5 from "../assets/images/sec2-5.png";

import "./value.css";

class Value extends React.Component {
  render() {
    return (
      <section id="value">
        <Container>
          <Row>
            <Col md="4">
              <Fade bottom>
              <h2 className="irade-title">Nuestra Oferta de Valor</h2>
              <hr className="hr-orange"></hr>
              <br></br>
              <p className="grey">
                My text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to mak
              </p>
              </Fade>
            </Col>
            <Col md="8">
                <Fade bottom cascade>
              <Row className="value-row">
                <Col md="4">
                  <Image src={img1} /> <br></br>
                  <p>Liderazgo y Excelencia</p>
                </Col>
                <Col md="4">
                  <Image src={img2} /> <br></br>
                  <p>Liderazgo y Excelencia</p>
                </Col>
                <Col md="4">
                  <Image src={img3} /> <br></br>
                  <p>Liderazgo y Excelencia</p>
                </Col>
                <Col md="4">
                  <Image src={img4} /> <br></br>
                  <p>Liderazgo y Excelencia</p>
                </Col>
                <Col md="4">
                  <Image src={img5} /> <br></br>
                  <p>Liderazgo y Excelencia</p>
                </Col>
              </Row>
                </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Value;
