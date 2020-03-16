import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";


import img1 from "../assets/images/sec4-1.png";
import img2 from "../assets/images/sec4-2.png";
import img3 from "../assets/images/sec4-3.png";
import img4 from "../assets/images/sec4-4.png";
import img5 from "../assets/images/sec4-5.png";


import "./services.css"

class Services extends React.Component {
  render() {
    return (
      <section id="services">
        <Container>
          <Fade>
            <h2 className="irade-title"> Nuestra Oferta</h2>
       
            <hr className="hr-orange"></hr>
            <br></br>
            <br></br>
            </Fade>
          <Row>
            
            <Col>
            <Fade bottom cascade>
              <Image src={img1} ></Image>
              <br></br>
              <br></br>

              <h3 className="blue">Alianzas</h3>
 
              <p className="grey">My text of the printing and typesetting industry. Lorem Ipsum has been the indu</p>
              </Fade>
            </Col>
            <Col>
            <Fade bottom cascade>
              <Image src={img2} ></Image>
              <br></br>
              <br></br>

              <h3 className="blue">Alianzas</h3>
 
              <p className="grey">My text of the printing and typesetting industry. Lorem Ipsum has been the indu</p>
              </Fade>
            </Col>
            <Col>
            <Fade bottom cascade>

              <Image src={img3} ></Image>
              <br></br>
              <br></br>

              <h3 className="blue">Alianzas</h3>
 
              <p className="grey">My text of the printing and typesetting industry. Lorem Ipsum has been the indu</p>
              </Fade>
            
            </Col>
            <Col>
            <Fade bottom cascade>

              <Image src={img4} ></Image>
              <br></br>
              <br></br>

              <h3 className="blue">Alianzas</h3>
 
              <p className="grey">My text of the printing and typesetting industry. Lorem Ipsum has been the indu</p>
              </Fade>
            
            </Col>
            <Col>
            <Fade bottom cascade>

              <Image src={img5} ></Image>
              <br></br>
              <br></br>

              <h3 className="blue">Alianzas</h3>
 
              <p className="grey">My text of the printing and typesetting industry. Lorem Ipsum has been the indu</p>
              </Fade>
            
            </Col>
           
         
          </Row>
        </Container>
      </section>
    );
  }
}

export default Services;
