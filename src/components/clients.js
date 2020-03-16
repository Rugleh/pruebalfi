import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";


import "./clients.css";

import img1 from "../assets/images/sec5-1.png";
import img2 from "../assets/images/sec5-2.png";
import img3 from "../assets/images/sec5-3.png";
import img4 from "../assets/images/sec5-4.png";

class Clients extends React.Component {
  render() {
    return (
      <section id="clients">
        <Container>
          <Fade>
          <h2 className="irade-title"> Nuestros Socios</h2>

          <hr className="hr-blue"></hr>
          </Fade>
          <br></br>
          <br></br>
          <Row>
            <Col>
            <Fade>
              <InfiniteCarousel
                breakpoints={[
                  {
                    breakpoint: 500,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3
                    }
                  }
                ]}
                dots={true}
                showSides={true}
                sidesOpacity={0.5}
                sideSize={0.1}
                slidesToScroll={4}
                slidesToShow={3}
                scrollOnDevice={true}
              >
                <div>
                  <img alt="" src={img1} />
                </div>
                <div>
                  <img alt="" src={img2} />
                </div>
                <div>
                  <img alt="" src={img3} />
                </div>
                <div>
                  <img alt="" src={img4} />
                </div>
                <br></br>
                <br></br>
              </InfiniteCarousel>
              </Fade>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
      </section>
    );
  }
}

export default Clients;
