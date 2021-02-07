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
import planetPic from "../../assets/GalaxyBackground.jpg"
import Footer from "../../components/Footer/Footer"
import Video from "../../assets/videos/spaceVid.mp4"
import spaceInvader from "../../assets/spaceInvader.png"
import styled, {keyframes} from "styled-components"
import {bounce} from "react-animation"
import { animations } from 'react-animation'
import { easings } from 'react-animation'

const About = () => {



  const style2 = {
    animation: `pop-in ${easings.easeOutExpo} 5000ms forwards`
  };

  const style= {
    animation:{
      animation: `pop-in ${easings.easeOutExpo} 50000ms forwards`
    }
    
  }
  return (
    <div id="about">
      <div className="about">
        
        <Container id="bg1" className="mt-0">
        <video className='videoTag' autoPlay loop muted>
    <source src={Video} type='video/mp4' />
</video>
          <Row className="pt-0 pb-4 mb-2  align-items-top">
            <Col id= "col1" xs={12} md={6}>

              <Row className="justify-content-left mb-2 mr-2">
            <Image style= {style2} id="profile" className= "ml-3 mt-5"src={Profile} roundedCircle />
              </Row>
              
              <Card style={{ width: "18rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item id= "react">
                    <p id= "skills">Skills</p>
                  <FontAwesomeIcon id= "react"icon={faReact} />
                    React</ListGroup.Item>
                  <ListGroup.Item id="javascript">
                  <FontAwesomeIcon id="javascript" icon={faJs} />
                    Javascript</ListGroup.Item>
                  <ListGroup.Item id="node">
                  <FontAwesomeIcon id= 'node'icon={faNode} />
                    NodeJs</ListGroup.Item>
                    <ListGroup.Item id="spanish">
                  <FontAwesomeIcon  id="spanish"icon={faLanguage} />
                    Spanish</ListGroup.Item>

                    <ListGroup.Item id="resume">
                  <FontAwesomeIcon id="resume" icon={faList} />
                    <div>
                    <Button href="https://docs.google.com/document/d/1Rbz5gWwFHqjOh78-TLTi_wcWiNxMNhJJLNRJkclJYGI/edit?usp=sharing" variant="link">Resume</Button>
                    </div></ListGroup.Item>

                    <ListGroup.Item id="github">
                    <FontAwesomeIcon  id="github" icon={faGithubAlt} />
                      <div>
                      <Button href="https://github.com/condeemilio891" variant="link">GitHub</Button>
                      </div>
                  
                    </ListGroup.Item>
                </ListGroup>
                
              </Card>
              
              
            </Col>
            <Col id="col2" xs={12} md={6}>
            <div class="earth">
  <div></div>
</div>
            <Image id="planetPic" className="planetPic" src={spaceInvader}/>
              <Jumbotron fluid id="EmilioInfo" className="mt-5">
              <h1>About</h1>
                <Container>
                  
                  <Row>
                    <Col id="leftBackground">
                      <ul>
                      
                        <p>Hi! My name is Emilio. 
                        I am a Front-end web developer leveraging a background in psychology and education. using this experience to build a more intuitive user experience on the web. 
                        I worked on a team of four to develop a single-page MERN app that helps local gamers track their gaming-history, library, and friends. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web. 

                        I also have experience with behavior therapy and education. I have taught at most age levels.

                        </p>
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
                        <li>
                        Bachelor's degree in neuroscience from St.Edwards University
                        </li>
                        <li>
                          Coding bootcamp certificate program University of Texas
                        </li>
                        <li>
                          Experience doing therapy for diverse age groups at Center for Autism
                        </li>
                        
                      </ul>

                      
                    </Col>
                    
                  </Row>
              
                </Container>
            
               
              
                
              </Jumbotron>
   
            </Col>
            
          </Row>
          
        </Container>
        <Footer />
      </div>
      
    </div>
  );
};

export default About;
