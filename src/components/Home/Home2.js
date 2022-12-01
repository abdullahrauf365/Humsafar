import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/logo_black.svg";
import Tilt from "react-parallax-tilt";


import { ImAndroid } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> OURSELF
            </h1>
            <p className="home-about-body">
            <i>
                <b className="purple"> Humsafar  </b>
              </i>  is a mobile based application through which a person can share his/her ride with someone having the same commute anywhere in Pakistan by a series of simple steps. 
              <br />
              <br /><i>
                <b className="purple"> Humsafar  </b>
              </i> will connect people with mutual daily as well as occasional commutes. People can select their pickup and drop off location and Humsafar will display all the people heading towards that direction with a complete route map to avoid route conflicts. 
              
              <br />
              <br />
              our system will be a game changer for people with daily as well as occasional commutes, who don't want to be called as captain or a driver. 
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Download Our Application</h1>
            <p>
              <span className="purple">Android </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://expo.dev/artifacts/f89907d0-4312-4913-b9ff-788ace18efd8"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <ImAndroid />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
