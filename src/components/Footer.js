import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FaPhoneAlt, FaGoogle } from "react-icons/fa";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Humsafar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Humsafar</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="+923225666270"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaPhoneAlt />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="Help.humsafar@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </a>
            </li>
            
           
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
