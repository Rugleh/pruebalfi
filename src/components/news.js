import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Fade from "react-reveal/Fade";



import "./news.css";

import img1 from "../assets/images/sec3-1.png";
import img2 from "../assets/images/sec3-2.png";
import img3 from "../assets/images/sec3-3.png";

class News extends React.Component {
  render() {
    return (
      <section id="news">
        <Container>
          <Fade left>

          <h2 className="irade-title">IRADE Comunicaciones</h2>
          <hr className="hr-blue"></hr>
          <br></br>
          <p>
            IRADE Comunicaciones I IRADE News I Encuentros empresariales I Fotos
            I Videos{" "}
          </p>
          <br></br>
          </Fade>
          <Row>
            <Col md={8}>
              <Fade left>
              <Row>
                <Col>
                  <Card className="text-white big-card">
                    <Card.Img src={img1} alt="Card image" />

                    <Card.ImgOverlay className="big-card-overlay">
                      <Card.Text> 23 de Agosto 2020 </Card.Text>
                      <Card.Title className="big-card-title">IRADE realiza programa de educación cívica a empresas del Biobío</Card.Title>
                      
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Row>
              </Fade>
              <br></br>
              <Row>
                <Col md={6}>
                <Fade bottom>
                  <Card className="text-white short-card">
                    <Card.Img src={img2} alt="Card image" />
                    <Card.ImgOverlay className="big-card-overlay">
                      
                      <Card.Text>23 de Agosto 2020</Card.Text>
                      <Card.Text className="short-card-title">
                      Talleres buscan potenciarle empoderamiento económico de las mujeres en el mundo privado
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Fade>
                </Col>
                <Col md={6}>
                <Fade bottom>

                  <Card className="text-white short-card">
                    <Card.Img src={img3} alt="Card image" />
                    <Card.ImgOverlay className="big-card-overlay">
                      <Card.Text>23 de Agosto 2020</Card.Text>
                      <Card.Text className="short-card-title">
                      Talleres buscan potenciarle empoderamiento económico de las mujeres en el mundo privado
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Fade>

                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Fade right>
              <p>28 de agosto 2018</p>
              <h4>
                Seminario internacional abordó relación entre industrias
                creativas creativas y empresas de la región
              </h4>
              <Image src={img2} />

              <hr></hr>

              <h4>
                Seminario internacional abordó relación entre industrias
                creativas creativas y empresas de la región
              </h4>
              <p>
                My text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to mak
              </p>
              </Fade>
            </Col>
            
          </Row>

        </Container>
        <div className="text-center">

            <Button className="btn btn-primary white">VER TODAS LAS NOTICIAS</Button>
            </div>
            <br></br>
            <br></br>
      </section>
    );
  }
}

export default News;
