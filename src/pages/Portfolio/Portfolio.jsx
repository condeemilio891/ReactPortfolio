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
import NeonCard from "../../components/NeonCard/NeonCard"


function Projects() {
  return (
    <div id="bg">
      <TabNav>
        
      <div label="GameDex">
          <Container>
            <MyCard
              imgsrc={GamePic}
              title="GameDex"
              activeGit="https://github.com/ParkerM2/GamesList"
              activeLink="https://game-dex-ut.herokuapp.com/"
            ></MyCard>
                <NeonCard
                cardTitleLeft="GameDex"
                 cardTextLeft="Allows users to create a password and a user page. Assigns a random pokemon for each user. 
                 Allows the user to search and save games.
                 "
                 cardTextRight="I created an navbar and the appropriate logic for its routing. I used the pokemon api in 
                 order to assign a pokemon when a new user is made. 
                 Also worked on Front end. Helped with express authenticator."
                />


          </Container>
        </div>


        <div label="WatchIt">
          <Container>
            <MyCard
              imgsrc={AnimePic}
              title="WatchIt"
              activeGit="https://github.com/condeemilio891/AnimeSearch"
              activeLink="https://condeemilio891.github.io/AnimeSearch/"
            >
            </MyCard>
            
          </Container>
          <NeonCard
            cardTitleLeft="Watch It"
            cardTextLeft="A search engine that uses the 
            Kistu API in order to find anime titles. The results from the search give a desciption of the anime 
            the user clicks on and a list websites the user clicks on. Additionaly the user is told
            were they can watch the anime searched"
            cardTextRight="I used Ajax to communicate with the Kitsu Api. 
            After Recieving and storing information using local storage and then parsed using JSON in order 
            to append the data following an on click event."
          />
        </div>

  

        <div label="EMS">
          <Container>
            <MyCard
              imgsrc={EMS}
              title="Employee Manangment System"
              activeGit="https://github.com/condeemilio891/EmployeeManagementSystem"
              activeLink="https://github.com/condeemilio891/EmployeeManagementSystem"
           ></MyCard>
            <NeonCard
              cardTitleLeft="Employee Manangment System"
              cardTextLeft="Allows users to view,add,update and delete employees 
              as well as view them by manager,role or department. Able to view the budget.
              " 
              cardTextRight= "I used node.js and SQL queries like SELECT, INSERT, UPDATE, DELETE, ORDER BY and WHERE  in order to achieve this task. I also used inquirer to prompt the user to view,add, update, delete etc."
    
            />
          </Container>
        </div>

        <div label="ReadME Gen">
          <Container>
            <MyCard
              imgsrc={GRGPic}
              title="GoodReadMe Generator"
            
                        activeGit="https://github.com/condeemilio891/good_READme_generator"
                        activeLink="https://condeemilio891.github.io/good_READme_generator/"
            ></MyCard>
              <NeonCard
                cardTitleLeft="Good ReadMe Generator"
                 cardTextLeft="Generates a readMe with the following parameters 
                 Table of Contents
                           -[Description](#description)
                           -[Installation](#installation)
                           -[Usage](#usage)
                           -[Test](#test)
                           -[Credits](#credits)
                                 "
                 cardTextRight="I Used inquirer and node in order to prompt the user for the content desired for the readMe. I then used a promise to pass the properties given by the user into a write file function which then generated the readMe"
                />
          </Container>
        </div>

        <div label="Quiz">
          <Container>
            <MyCard
              imgsrc={QuizPic}
              title="NeuroQuiz"
              description="A Challenging Biology Quiz"
              activeGit="https://github.com/condeemilio891/quiz"
              activeLink="https://condeemilio891.github.io/quiz/"
              
            ></MyCard>
              <NeonCard
              cardTitleLeft= "Long-term potentiation"
              cardTextLeft=" A neurobiology quiz that covers long term potentiation after showing the user a video of the subject matter. LTP covers learning and memory "
              cardTextRight= " In order to create this quiz I created an array of questions. As the questions go down the array the logic checks if the answer is right. If so the score goes up if not the next question is asked"
    
            />
          </Container>
        </div>

        <div label="Calendar">
          <Container>
            <MyCard
              imgsrc={CalPic}
              title="Wayback Calendar"
              description="A Calender that features a song or two for each decade"
              activeGit="https://github.com/condeemilio891/Calendar"
              activeLink="https://condeemilio891.github.io/Calendar/"
              
            >
          
            </MyCard>
            <NeonCard
              cardTitleLeft= "Wayback Calendar"
              cardTextLeft=" Experience songs from each generation while planning your day!"
              cardTextRight= "The main focus for the project is the ability to manipulate the dom, and create on click events in order to do so"
    
            />
            
          </Container>
        </div>
      </TabNav>
    </div>
  );
}


export default Projects;