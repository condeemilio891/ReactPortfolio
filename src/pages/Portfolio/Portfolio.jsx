import React, { Component } from "react";
import MyCard from "../../components/Card/cardui";
import TabNav from "../../components/Tabs/tabNav";
import AnimePic from "../../assets/animepic.png";
import Container from "../../components/Container";
import "./Portfolio.css";
import CalPic from "../../assets/calpic.jpg"
import GRGPic from "../../assets/readMeGeneratorPic.png"
import QuizPic from "../../assets/Untitled.png"
import GamePic from "../../assets/Gamedexexibition.png"

function Projects() {
  return (
    <div id="bg">
      <TabNav>
        <div id="bg" label="Project 1">
      
          <Container id="bg">
            <MyCard
              imgsrc={AnimePic}
              title="WatchIt"
              text="Searches for anime using the kitsu api"
            >
              dfadaf
            </MyCard>
          </Container>
        </div>

        <div label="Project 2">
   
          <Container>
            <MyCard
              imgsrc={GamePic}
              title="GameDex"
              text="Allows users to keep track of their games"
            ></MyCard>
          </Container>
        </div>

        <div label="Project 3">
       
          <Container>
            <MyCard
              imgsrc={AnimePic}
              title="Employee Manangment System"
              text=" Allows the user to add/replace and delete employees,departments and managers. This program uses inquirer"
            ></MyCard>
          </Container>
        </div>

        <div label="Project 4">
       
          <Container>
            <MyCard
              imgsrc={GRGPic}
              title="GoodReadMe Generator"
              text="Table of Contents

-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Test](#test)
-[Credits](#credits)"
            ></MyCard>
          </Container>
        </div>

        <div label="Project 5">
      
          <Container>
            <MyCard imgsrc={QuizPic} title="NeuroQuiz" text ="A Challenging Biology Quiz"></MyCard>
          </Container>
        </div>

        <div label="Project 6">
         
          <Container>
            <MyCard imgsrc={CalPic}title= "Wayback Calendar" text="A Calender that features a song or two for each decade"> </MyCard>
          </Container>
        </div>
      </TabNav>
    </div>
  );
}

export default Projects;
