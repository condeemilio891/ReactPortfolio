import React from "react"
import Projects from '../Portfolio/Portfolio'
import Textbox from "../../components/Title/title"
import Radio from "../../components/Radio/Radio"
import Container from "react-bootstrap/Container"
import Video from "../../assets/videos/spaceVid.mp4";
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
    <Projects/>
    </Container>
       
       </div>
     </div>
   
    
       
    
 )

}

export default onePage 