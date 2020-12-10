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
import {faMapPin} from '@fortawesome/free-solid-svg-icons'
import {faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import {faLanguage} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import {faList} from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <Container id="bg1">
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-left mb-2 mr-2">
                <Image id="profile" src={Profile} roundedCircle />
              </Row>
              <Card style={{ width: "18rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <p id= "skills">Skills</p>
                  <FontAwesomeIcon icon={faReact} />
                    React</ListGroup.Item>
                  <ListGroup.Item>
                  <FontAwesomeIcon icon={faJs} />
                    Javascript</ListGroup.Item>
                  <ListGroup.Item>
                  <FontAwesomeIcon icon={faNode} />
                    NodeJs</ListGroup.Item>
                    <ListGroup.Item>
                  <FontAwesomeIcon icon={faLanguage} />
                    Spanish</ListGroup.Item>

                    <ListGroup.Item>
                  <FontAwesomeIcon icon={faList} />
                    <div>
                    <Button href="https://docs.google.com/document/d/1Rbz5gWwFHqjOh78-TLTi_wcWiNxMNhJJLNRJkclJYGI/edit?usp=sharing" variant="link">Resume</Button>
                    </div></ListGroup.Item>

                    <ListGroup.Item>
                    <FontAwesomeIcon icon={faGithubAlt} />
                      <div>
                      <Button href="https://github.com/condeemilio891" variant="link">GitHub</Button>
                      </div>
                  
                    </ListGroup.Item>
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
                      
                        <p>Hi! My name is Emilio. I have experience with behavior therapy and education. I have taught at most age levels.</p>
                      </ul>
                    </Col>
                    <Col id="rightBackground">
                      <ul id ="list-info">
                        <li>
                       
                          Emilio Conde</li>
                        
                        <li>
                        <FontAwesomeIcon icon={faMapPin} />
                          Austin, Texas</li>
                        <li>
                        <FontAwesomeIcon icon={faUserGraduate} />
                          BS</li>
                        <li>
                        <FontAwesomeIcon icon={faReact} />
                        Condeemilio891@gmail</li>
                        <li>
                        <FontAwesomeIcon icon={faPhone} />
                        806-672-6544</li>
                        
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
