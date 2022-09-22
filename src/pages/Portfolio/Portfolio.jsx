import React, { Component } from "react";
import MyCard from "../../components/Card/cardui";
import TabNav from "../../components/Tabs/tabNav";
import AnimePic from "../../assets/animepic.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Portfolio.css";
import CalPic from "../../assets/calpic.jpg";
import GRGPic from "../../assets/readMeGeneratorPic.png";
import QuizPic from "../../assets/Untitled.png";
import GamePic from "../../assets/Gamedexexibition.png";
import DenimHaircut from "../../assets/DenimHaircutPic.png"
import EMS from "../../assets/EMS.jpg"
import SolarSystemWebPic from "../../assets/SolarSystemInfoWebPic.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import NeonCard from "../../components/NeonCard/NeonCard"


function Projects() {
  return (
    <div id="projectbg">
      <TabNav>
        
      <div label="MarsPhotoSearch">
        
          
            
        <Container>
      <MyCard
        imgsrc={SolarSystemWebPic}
        title="Solar System"
        activeGit="https://github.com/condeemilio891/SolarSystem"
        activeLink="https://solarsystemi.netlify.app/"
      ></MyCard>
     </Container>
          <NeonCard
          cardTitleLeft="Solar System Info"
           cardTextLeft="Solo Project about the solar system. Currently a user can search for the latest photos taken on Mars 
           by using NASA's MarsPhoto API. There is also a small artistic model of the solar system that tells the user about the planet 
           selected.  
           "
           cardTextRight="I Used Material ui, Styled-Compenents, React spring for animation and UI. I used NASA api to populate information 
           about rovers and photos taken daily."
          />
  </div>

  <div label="Denim HairCut">
        
          
            
        <Container>
      <MyCard
        imgsrc={DenimHaircut}
        title="Denim Haircut"
        activeGit="https://github.com/condeemilio891/DenimHaircut"
        activeLink="https://denim-haircut.herokuapp.com/"
      ></MyCard>
     </Container>
          <NeonCard
          cardTitleLeft="Denim Haircut"
           cardTextLeft="Website I made for a local band 
           "
           cardTextRight="I Used styled components, react scroll and Framer motion."
          />
  </div>
      <div label="GameDex">
        
          
            
              <Container>
            <MyCard
              imgsrc={GamePic}
              title="GameDex"
              activeGit="https://github.com/ParkerM2/GamesList"
              activeLink="https://game-dex-ut.herokuapp.com/"
            ></MyCard>
           </Container>
                <NeonCard
                cardTitleLeft="GameDex"
                 cardTextLeft="Allows users to create a password and a user page. Assigns a random pokemon for each user. 
                 Allows the user to search and save games.
                 "
                 cardTextRight="I created the navbar and footer and the appropriate logic for its routing. 
                 I used the pokemon api in 
                 order to assign a pokemon when a new user is created. 
                 I used bootstrap and jquery to help create the front end.
                  I Helped with express authenticator, an NPM package that helps create and store usernames and passwords."
                />
             
          
        
          
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
            Kistu API in order to find anime titles. The results from the search give a desciption of the anime. 
            Additionaly the user is told
            were they can watch the anime."
            cardTextRight="I used Ajax to communicate with the Kitsu API. 
            After recieving the information it is stored into an array and then appended on the correct html elements following an on click event."
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
              cardTextLeft="Allows users to view, add, update and delete employees 
              as well as view them by manager, role or department. Able to view the budget.
              " 
              cardTextRight= "Using Inquirer to create a CLM the user is prompted to manage their employees. After the user inputs the data, I used node.js and SQL queries like SELECT, INSERT, UPDATE, DELETE, ORDER BY and WHERE  in order communicate with the backend and update the data."
    
            />
          </Container>
        </div>

        <div label="ReadME Gen">
          <Container>
            <MyCard
              imgsrc={GRGPic}
              title="GoodReadme Generator"
            
                        activeGit="https://github.com/condeemilio891/good_READme_generator"
                        activeLink="https://condeemilio891.github.io/good_READme_generator/"
            ></MyCard>
              <NeonCard
                cardTitleLeft="Good ReadMe Generator"
                 cardTextLeft="Generates a professional Readme containing the following parameters 
               
                           -[Description](#Readme)
                           [Installation](#node.js)
                           [Usage](#inquirer CLM)
                           [Test](#no test req)
                           [Credits](#Condeemilio)
                                 "
                 cardTextRight="I used Inquirer and node.js to create a command line interface that prompts the user for the content of the Readme. The properties are passed and used in a write file function which then generated the Readme"
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
              cardTextRight= "The main focus for the project is the ability to manipulate the dom using the jquery framework and create on click events in order to do so"
    
            />
            
          </Container>
        </div>
      </TabNav>
    </div>
  );
}


export default Projects;