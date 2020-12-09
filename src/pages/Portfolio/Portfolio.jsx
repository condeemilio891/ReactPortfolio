import React, { Component } from "react";
import MyCard from "../../components/Card/cardui";
import Tab from "../../components/Tabs/tab";
import TabNav from "../../components/Tabs/tabNav";
import AnimePic from "../../assets/animepic.png";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import {Accordian,Card} from "react-bootstrap"
import axios from "axios"


function Projects() {
  return (
    <div id="bg">
      
      <TabNav>
        <div id="bg" label="Project 1">
          WatchIt <em>Search for your favorite Anime</em>!
          <Container id="bg">
            <MyCard imgsrc={AnimePic} title="WatchIt" text="">
            dfadaf
            </MyCard>
          
          </Container>
        </div>

        <div label="Project 2">
          After 'while, <em>Crocodile</em>!
          <Container>
            <MyCard imgsrc={AnimePic}>
              
            </MyCard>
          </Container>
        </div>

        <div label="Project 3">
          Nothing to see here, this tab is <em>extinct</em>!
          <Container>
            <MyCard imgsrc={AnimePic}></MyCard>
          </Container>
        </div>

        <div label="Project 4">
          Nothing to see here, this tab is <em>extinct</em>!
          <Container>
            <MyCard imgsrc={AnimePic}></MyCard>
          </Container>
        </div>

        <div label="Project 5">
          Nothing to see here, this tab is <em>extinct</em>!
          <Container>
            <MyCard imgsrc={AnimePic}></MyCard>
          </Container>
        </div>

        <div label="Project 6">
          Nothing to see here, this tab is <em>extinct</em>!
          <Container>
            <MyCard imgsrc={AnimePic}></MyCard>
          </Container>
        </div>
      </TabNav>
    </div>
  );
}

export default Projects;
