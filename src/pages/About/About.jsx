import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/picOfMeProfessional.png";
import "./About.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import {faJs} from '@fortawesome/free-brands-svg-icons'
import {faNode} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <Container id="bg">
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-left mb-2 mr-2">
                <Image id="profile" src={Profile} roundedCircle />
              </Row>
              <Card style={{ width: "18rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <p>Skills</p>
                  <FontAwesomeIcon icon={faReact} />
                    React</ListGroup.Item>
                  <ListGroup.Item>
                  <FontAwesomeIcon icon={faJs} />
                    Javascript</ListGroup.Item>
                  <ListGroup.Item>
                  <FontAwesomeIcon icon={faNode} />
                    NodeJs</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Jumbotron fluid id="EmilioInfo">
                <Container>
                  <h1>About</h1>
                  <Row>
                    <Col id="leftBackground">
                      <ul>
                        <li>Name</li>
                        <li>Location</li>
                        <li>Degree</li>
                        <li>Email</li>
                      </ul>
                    </Col>
                    <Col id="rightBackground">
                      <ul id ="list-info">
                        <li>Emilio Conde</li>
                        <li>Austin, Texas</li>
                        <li>BS</li>
                        <li>Condeemilio891@gmail.com</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
