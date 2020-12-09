import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../../components/Card/cards";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/picOfMeProfessional.png"
import "./About.css"

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image id ="profile"src={Profile} roundedCircle />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
