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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { DiJavascript } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import { faBootstrap} from "@fortawesome/free-brands-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import Video from "../../assets/videos/spaceVid.mp4";
import spaceInvader from "../../assets/spaceInvader.png";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { easings } from "react-animation";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import Radio from "../../components/Radio/Radio";
const About = () => {
  const style2 = {
    animation: `pop-in ${easings.easeOutExpo} 5000ms forwards`,
  };

  const style = {
    animation: {
      animation: `pop-in ${easings.easeOutExpo} 50000ms forwards`,
    },
  };
  return (
    <div id="about">
      <div className="about">
        <Container id="bg1" className="mt-0">
          <video className="videoTag" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>

          <Row className="pt-0 pb-4 mb-2  align-items-top">
            <Col id="col1" xs={12} md={6}>
              <Row className="justify-content-left mb-2 mr-2">
                <Image
                  style={style2}
                  id="profile"
                  className="ml-3 mt-5"
                  src={Profile}
                  roundedCircle
                />
              </Row>

              <Card id="card" style={{ width: "18rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="skillsText" id="react">
                    <p id="skills">Skills</p>
                    
                    <FontAwesomeIcon className="skillsIcons" id="react" icon={faHtml5} />
                    Html
                  </ListGroup.Item>
                  <ListGroup.Item className="skillsText" id="javascript">
                    <FontAwesomeIcon className="skillsIcons" id="javascript" icon={faCss3Alt} />
                    CSS
                  </ListGroup.Item>
                  <ListGroup.Item className="skillsText" id="javascript">
                    <FontAwesomeIcon className="skillsIcons" id="javascript" icon={faBootstrap} />
                    Bootstrap
                  </ListGroup.Item>
                  <ListGroup.Item className="skillsText" id="javascript">
                    <FontAwesomeIcon className="skillsIcons" id="javascript" icon={faJs} />
                    Javascript
                  </ListGroup.Item>
                  <ListGroup.Item className="skillsText" id="javascript">
                    <DiJqueryLogo className= "skillsText" />
                    Jquery
                  </ListGroup.Item>
                  
                  <ListGroup.Item className="skillsText" id="react">
                    <FontAwesomeIcon className="skillsIcons" id="react" icon={faReact} />
                    React
                  </ListGroup.Item>
                  <ListGroup.Item className="skillsText">
                  <DiJavascript className="skillsIcons"/>
                    Express

                  </ListGroup.Item>
                  <ListGroup.Item id="node" className="skillsText">
                    <FontAwesomeIcon className="skillsIcons" id="node" icon={faNode} />
                    NodeJs
                  </ListGroup.Item>
                  <ListGroup.Item id="node" className="skillsText">
                    <GrMysql className="skillsIcons" />
                    MySQL
                  </ListGroup.Item >
                  <ListGroup.Item id="node" className="skillsText">
                    <SiMongodb  className="skillsIcons" />
                    Mongo
                  </ListGroup.Item>
                  <ListGroup.Item id="spanish" className="skillsText">
                    <FontAwesomeIcon className="skillsIcons" id="spanish" icon={faLanguage} />
                    Spanish
                  </ListGroup.Item>
                  
                  <ListGroup.Item id="resume">
                    <FontAwesomeIcon id="resumeIcon" icon={faList} />
                    <div>
                      <Button id="resumeButton"
                        href="https://docs.google.com/document/d/1Rbz5gWwFHqjOh78-TLTi_wcWiNxMNhJJLNRJkclJYGI/edit?usp=sharing"
                        variant="link"
                      >
                        Resume
                      </Button>
                    </div>
                  </ListGroup.Item>
                   
                  <ListGroup.Item id="github">
                    <FontAwesomeIcon id="githubIcon" icon={faGithubAlt} />
                    <div>
                      <Button id="githubButton"
                        href="https://github.com/condeemilio891"
                        variant="link"
                      >
                        GitHub
                      </Button>
                    </div>
                  </ListGroup.Item>
               
                  <ListGroup.Item id="linkedIn">
                    <FontAwesomeIcon id="linkedInIcon" icon={faLinkedin} />
                    <div>
                      <Button id= "linkedInButton"
                        href='https://www.linkedin.com/in/emilio-j-conde-ab2101195/'
                        variant="link"
                      >
                        LinkedIn
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                
              </Card>
             
            </Col>
            <Col id="col2" xs={12} md={6}>
              {/* planets */}
              <div class="mercury">
                <div></div>
              </div>
              <div class="venus">
                <div></div>
              </div>
              <div class="earth">
                <div></div>
              </div>
              <div class="mars">
                <div></div>
              </div>
              <div class="jupiter">
                <div></div>
              </div>
              <div class="sun">
                <div></div>
              </div>

              <Image id="planetPic" className="planetPic" src={spaceInvader} />
              <Jumbotron fluid id="EmilioInfo" className="mt-5">
                <h1 id="aboutSection">About</h1>
                <Container>
                  <Row>
                    <Col id="leftBackground">
                      <ul>
                        <p id="brandStatement">
                          Hi! My name is Emilio. I am web developer
                          leveraging a background in psychology and education
                          using this experience to build a more intuitive user
                          experience on the web. I worked on a team of four to
                          develop a single-page MERN app that helps local gamers
                          track their gaming-history, library, and friends. I’m
                          excited to leverage my skills as part of a fast-paced,
                          quality-driven team to build better experiences on the
                          web. I also have experience with behavior therapy and
                          education. I have taught at most age levels.
                        </p>
                      </ul>
                    </Col>
                    <Col>
                    <Radio />
                    </Col>
                    <Col id="rightBackground">
                      <ul id="list-info">
                        <li id="nameInfo">Emilio Conde</li>

                        <li id="cityInfo">
                          <FontAwesomeIcon icon={faMapPin} />
                          Austin, Texas
                        </li>
                        <li id="collegeInfo">
                          <FontAwesomeIcon icon={faUserGraduate} />
                          BS
                        </li>
                        <li id="emailInfo">
                          <FontAwesomeIcon icon={faReact} />
                          Condeemilio891@gmail
                        </li>
                        <li id="phoneInfo">
                          <FontAwesomeIcon icon={faPhone} />
                          806-672-6544
                        </li>
                        <li id="moreInfo">
                          Bachelor's degree in neuroscience from St.Edwards
                          University
                        </li>
                        <li id="moreInfo">
                          Coding bootcamp certificate program University of
                          Texas
                        </li>
                        <li id="moreInfo">
                          Experience doing therapy for diverse age groups at
                          Center for Autism
                        </li>
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
