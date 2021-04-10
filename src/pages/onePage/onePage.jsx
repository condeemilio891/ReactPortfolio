import React from "react"
import Projects from '../Portfolio/Portfolio'
import Textbox from "../../components/Title/title"
import Radio from "../../components/Radio/Radio"
import Container from "react-bootstrap/Container"
import Video from "../../assets/videos/spaceVid.mp4";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { DiJavascript } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import { faBootstrap} from "@fortawesome/free-brands-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import "./onePage.css"
import { motion } from "framer-motion"
const onePage =()=>{

 return(
     
     
      

<div id="about">
      <div className="about">
        <Container id="bg1" className="mt-0">
          <video className="videoTag" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
     <Textbox
       name= "Emilio Conde"
       subTitle="Front-End Developer"/>
       
         <motion.div 
         initial={{height:"80px", width:"80px"}}

         animate={{height:"30px",width:"30px",
         x: [0,-1000,0]}}

         transition={{
          
          repeat:10,
                      duration:30,
                      ease:"easeInOut"}}
         class="mercury">
                <motion.div></motion.div>
              </motion.div>

              {/* venus */}

               <motion.div
              

              animate={{height:["100px","50px","100px",'140px',"100px"],width:["100px","50px","100px",'140px',"100px"],
              x: [0,-500,-1000,-500,0]}}
     
              transition={{
               
               repeat:10,
               delay:0,
                           duration:30,
                           ease:"circIn"}}
              class="venus">
                <motion.div></motion.div>
              </motion.div> 



              <motion.div
                            animate={{height:["100px","150px","80px",'60px',"100px"],width:["100px","150px","80px",'60px',"100px"],
                            x: [0,500,800,500,0]}}

                            transition={{
                            
                            repeat:10,
                            delay:5,
             duration:50,
             ease:"circIn"}}


               class="earth">
                <motion.div></motion.div>
              </motion.div>
              <div class="mars">
                <div></div>
              </div>
       <Radio/>
       <Jumbotron id="aboutJumbotron">
         <Container>
           <h1 id="aboutTitle">About</h1>
           <p id="aboutText">
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
         </Container>
       </Jumbotron>
       <Jumbotron id="skillsJumbotron">
         <Container>
           <h1 id="skillsTitle">Skills and Projects</h1>
           <Row>
          <Col>
          <ul>
            <li>
            <FontAwesomeIcon className="skillsIcons" id="react" icon={faHtml5} />
                HTML
            </li>
            <li>
            <FontAwesomeIcon className="skillsIcons" id="javascript" icon={faCss3Alt} />
                CSS
            </li>
            <li>
            <FontAwesomeIcon className="skillsIcons" id="javascript" icon={faJs} />
                JavaScript
            </li>
            <li>
            <FontAwesomeIcon className="skillsIcons" id="react" icon={faReact} />
                React
            </li>
          </ul>
          </Col>
          
          <Col>
          <ul>
          <li>
          <FontAwesomeIcon className="skillsIcons" id="javascript" icon={faBootstrap} />
                Bootstrap
            </li>
            <li>
            <DiJqueryLogo className= "skillsText" />
                jQuery
            </li>
            <li>
            <DiJavascript className="skillsIcons"/>
                Express.js
            </li>
            <li>
            <FontAwesomeIcon className="skillsIcons" id="node" icon={faNode} />
                Node.js
            </li>
          </ul>
          </Col>

          <Col>
          <ul>
            <li>
            <SiMongodb  className="skillsIcons" />
                Mongo
            </li>
            <li>
            <GrMysql className="skillsIcons" />
                SQL
            </li>
            <li>
            <FontAwesomeIcon className="skillsIcons" id="spanish" icon={faLanguage} />
              Spanish
            </li>
          </ul>
          </Col>
           </Row>
         </Container>
       </Jumbotron>
    <Projects/>
    </Container>
       
       </div>
     </div>
   
    
       
    
 )

}

export default onePage 