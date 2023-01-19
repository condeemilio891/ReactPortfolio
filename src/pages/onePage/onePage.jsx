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
import { SiUnrealengine } from "react-icons/si"
import "./onePage.css"
import { motion } from "framer-motion"
import Footer from "../../components/Footer/Footer"
const onePage =()=>{

 return(
     
     
      

<div id="about">
      <div className="about">
        <Container id="bg1" className="mt-0">
          <video className="videoTag" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
     <Textbox
     id="titleTextBox"
       name= "Emilio Conde"
       subTitle="Front-End Developer"/>
       
        {/* mercury */}


         <motion.div 
         

         animate={{height:["80px","5px","120px","80px",],width:["80px","5px","120px","80px"],
         x: [0,-1000,0]}}

         transition={{
          repeatType:'loop',
          repeat:10000,
          delay:3,
                      duration:25,
                      ease:"linear"}}
         class="mercury">
                <motion.div></motion.div>
              </motion.div>

              {/* venus */}

               <motion.div
              

              animate={{height:["100px","20px","100px",'140px',"100px"],width:["100px","20px","100px",'140px',"100px"],
              x: [0,-500,-1000,-500,0]}}
     
              transition={{
               
                repeat:10000,
                repeatType:'loop',
               delay:2,
                           duration: 50,
                           ease:"linear"}}
              class="venus">
                <motion.div></motion.div>
              </motion.div> 

                  {/* earth */}

              <motion.div
                            animate={{height:["100px","180px",'20px',"100px"],width:["100px","180px",'20px',"100px"],
                            x: [0,450,1200,450,0]}}

                            transition={{
                            
                            repeat:10000,
                            repeatType:"loop",
                            delay:5,
             duration:75,
             ease:"linear"}}


               class="earth">
                <motion.div></motion.div>
              </motion.div>

                {/* mars  */}

              <motion.div
              
              animate={{height:["100px","150px",'10px',"100px"],width:["100px","150px",'10px',"100px"],
              x: [0,500,800,500,0]}}

              transition={{
              
                repeat:10000,
                repeatType:'loop',
              delay:15,
              duration:100,
              ease:"linear"}}
              
              
              
              class="mars">
                <motion.div></motion.div>
              </motion.div>
       <Radio/>
       <Jumbotron id="aboutJumbotron">
         <Container>
           <h1 id="aboutTitle">About</h1>
           <p id="aboutText">
           Hi! My name is Emilio. I am web developer and Unreal scripter. I like
                          using my background in psychology and education
                          to create intuitive UI. I've created AI and UI in Unreal 4 using behavior trees and widgets, I have
                          created full stack websites on a team of 4 and currently teach Unreal and Adobe animate.
                          I have taught at most age levels.
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
            <SiUnrealengine className="skillsIcons" />
                Unreal Engine
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
       <Footer/>
     </div>
   
    
       
    
 )

}

export default onePage 