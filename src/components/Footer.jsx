import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import flogoImg from "../img/footer-logo.png";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="ftr">
        <Container>
          <Row className="f-pad">
            <Col sm={12} md={12} lg={4} >
              <Row className="flex-column justify-content-between ftr-li-clr">
                <Col className="ftrlogo">
                  <img src={flogoImg} />
                </Col>
                <Col>
                  <p className="">(+1) 212-946-2701</p>
                  <p>hello@hasagency.com</p>
                </Col>
                <Col>
                  <ul></ul>
                  <i className="fa-brands fa-twitter m-1"></i>
                  <i className="fa-brands fa-facebook m-1"></i>
                  <i className="fa-brands fa-instagram m-1"></i>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} lg={4} >
              <Row>
                <Col>
                  <ul>
                    <li className="main-li">Services</li>
                    <li>Marketing</li>
                    <li>SEO/SEM</li>
                    <li>Development</li>
                    <li>UX Design</li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li className="main-li">Products</li>
                    <li> Elementor Guru</li>
                    <li> WooLentor Pro</li>
                    <li> Plugins NEW</li>
                    <li> Page Builder</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} lg={4}  >
              <Row>
                <Col>
                  <ul>
                    <li className="main-li">About</li>
                    <li>Features</li>
                    <li> Our Partners</li>
                    <li> Affiliate Program</li>
                    <li> Pricing</li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li className="main-li">Contact</li>
                    <li>Support Ticket</li>
                    <li>Help Desk</li>
                    <li> Live Chat</li>
                    <li>FAQs</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="copy py-3">
            <p className="mb-0">© 2023 <span className="fw-bold">Exomac</span> Made with <i class="fas fa-heart text-danger"></i> by <span className="fw-bold">HasThemes.</span></p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
