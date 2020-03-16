import React from "react";
import "./hero.css";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import Fade from "react-reveal/Fade";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img1 from "../assets/images/darrow.png";
import img2 from "../assets/images/uarrow.png";




class Hero extends React.Component {
  render() {
    return (
      <section id="hero">
        <Container fluid>
            <Fade>
          <Row>
            <Col md={6} className="div1">

            <Carousel className="content" 
            arrowLeft={<Image src={img1}></Image>}
            arrowRight={<Image src={img2}></Image>}
            addArrowClickHandler
            infinite arrows>
                <div>
                  <p className="orange">¿QUIENES SOMOS?</p>
                  <h1>
                    Somos una corporación que agrupa a las principales empresas
                    productivas y de servicios de la Región del Bío Bío.
                  </h1>
                </div>
                <div>
                  <p className="orange">¿QUIENES SOMOS?</p>
                  <h1>
                    Somos una corporación que agrupa a las principales empresas
                    productivas y de servicios de la Región del Bío Bío.
                  </h1>
                </div>
                <div>
                  <p className="orange">¿QUIENES SOMOS?</p>
                  <h1>
                    Somos una corporación que agrupa a las principales empresas
                    productivas y de servicios de la Región del Bío Bío.
                  </h1>
                </div>
              </Carousel>
            
            </Col>
            <Col className="div2">


            </Col>
          </Row>
            </Fade>
        </Container>
      </section>
    );
  }
}

export default Hero;
