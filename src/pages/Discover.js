import React, { Component } from "react";
import Card from "../components/Card/cardui";
import Tab from "../components/Tabs/tab";
import TabNav from "../components/Tabs/tabNav";
import Yoda from "../assets/yoda.jpeg"

function Projects ()
    {
        return (
          <div>
            <h1>Projects</h1>
           <TabNav> 
             <div label="Project 1"> 
             See ya later, <em>Project 1</em>!
             <Card imgsrc={Yoda}>
                </Card>
             </div> 
             <div label="Project 2"> 
               After 'while, <em>Crocodile</em>! 
             </div> 
             <div label="Project 3"> 
               Nothing to see here, this tab is <em>extinct</em>! 
             </div> 
           </TabNav> 
          </div>
        );
      }
      
  export default Projects;