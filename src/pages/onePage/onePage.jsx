import React from "react"
import Projects from '../Portfolio/Portfolio'
import Textbox from "../../components/Title/title"
import Radio from "../../components/Radio/Radio"
import Container from "react-bootstrap/Container"
import Video from "../../assets/videos/spaceVid.mp4";
import Jumbotron from "react-bootstrap/Jumbotron"
import "./onePage.css"
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
       <Radio/>
       <Jumbotron id="aboutJumbotron">
         <Container>
           <h1 id="aboutTitle">About</h1>
           <p>
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
    <Projects/>
    </Container>
       
       </div>
     </div>
   
    
       
    
 )

}

export default onePage 