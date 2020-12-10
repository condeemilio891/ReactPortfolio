import React, { Component } from "react";
import MyCard from "../../components/Card/cardui";
import TabNav from "../../components/Tabs/tabNav";
import AnimePic from "../../assets/animepic.png";
import Container from "../../components/Container";
import "./Portfolio.css";
import CalPic from "../../assets/calpic.jpg";
import GRGPic from "../../assets/readMeGeneratorPic.png";
import QuizPic from "../../assets/Untitled.png";
import GamePic from "../../assets/Gamedexexibition.png";
import EMS from "../../assets/EMS.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
function Projects() {
  return (
    <div id="bg">
      <TabNav>
        
        <div id="bg" label="WatchIt">
          <Container id="bg">
            <MyCard
              imgsrc={AnimePic}
              title="WatchIt"
              text="Searches for anime using the kitsu api"
              activeGit="https://github.com/smrodriguez88/WatchIt"
              activeLink="https://smrodriguez88.github.io/WatchIt/"
            >
              dfadaf
            </MyCard>
          </Container>
        </div>

        <div label="GameDex">
          <Container>
            <MyCard
              imgsrc={GamePic}
              title="GameDex"
              text="Allows users to keep track of their games"
              activeGit="https://github.com/ParkerM2/GamesList"
              activeLink="https://game-dex-ut.herokuapp.com/"
            ></MyCard>
          </Container>
        </div>

        <div label="EMS">
          <Container>
            <MyCard
              imgsrc={EMS}
              title="Employee Manangment System"
              text=" View-Employees,Roles and departments
              Add-Employees,Roles and departments
              Update-Employee Data,Roles and Department Data
              Delete-Employees, Roles and Departments
              View Budget and Salaries
              Look up employee by manager, role or departments.
               This program uses inquirer." 
              activeGit="https://github.com/condeemilio891/EmployeeManagementSystem"
              activeLink="https://github.com/condeemilio891/EmployeeManagementSystem"
           ></MyCard>
          </Container>
        </div>

        <div label="ReadME Gen">
          <Container>
            <MyCard
              imgsrc={GRGPic}
              title="GoodReadMe Generator"
              text="Table of Contents

                        -[Description](#description)
                        -[Installation](#installation)
                        -[Usage](#usage)
                        -[Test](#test)
                        -[Credits](#credits)
                              "
                        activeGit="https://github.com/condeemilio891/good_READme_generator"
                        activeLink="https://condeemilio891.github.io/good_READme_generator/"
            ></MyCard>
          </Container>
        </div>

        <div label="Quiz">
          <Container>
            <MyCard
              imgsrc={QuizPic}
              title="NeuroQuiz"
              text="A Challenging Biology Quiz"
              activeGit="https://github.com/condeemilio891/quiz"
              activeLink="https://condeemilio891.github.io/quiz/"
            ></MyCard>
          </Container>
        </div>

        <div label="Calendar">
          <Container>
            <MyCard
              imgsrc={CalPic}
              title="Wayback Calendar"
              text="A Calender that features a song or two for each decade"
              activeGit="https://github.com/condeemilio891/Calendar"
              activeLink="https://condeemilio891.github.io/Calendar/"
            >
          
            </MyCard>
          </Container>
        </div>
      </TabNav>
    </div>
  );
}

export default Projects;
