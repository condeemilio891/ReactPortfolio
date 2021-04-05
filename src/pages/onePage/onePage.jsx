import React from "react"
import Projects from '../Portfolio/Portfolio'
import Textbox from "../../components/Title/title"
import Radio from "../../components/Radio/Radio"
import "./onePage.css"
const onePage =()=>{

 return(
     
     <>
     
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
    </>
    
 )

}

export default onePage 