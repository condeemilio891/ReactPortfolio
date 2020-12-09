import React, { Component } from "react";
import Card from "../components/Card/cardui";
import Tab from "../components/Tabs/tab";
import TabNav from "../components/Tabs/tabNav";
import AnimePic from "../assets/animepic.png";
import Hero from "../components/Hero";
import Container from "../components/Container";
function Projects() {
  return (
    <div>
      
      <TabNav>
        <div label="Project 1">
          WatchIt <em>Search for your favorite Anime</em>!
          <Container>
            <Card imgsrc={AnimePic}></Card>
          </Container>
        </div>

        <div label="Project 2">
          After 'while, <em>Crocodile</em>!
          <Container>
            <Card imgsrc={AnimePic}></Card>
          </Container>
        </div>

        <div label="Project 3">
          Nothing to see here, this tab is <em>extinct</em>!
          <Container>
            <Card imgsrc={AnimePic}></Card>
          </Container>
        </div>

        <div label="Project 4">
          Nothing to see here, this tab is <em>extinct</em>!
          <Container>
            <Card imgsrc={AnimePic}></Card>
          </Container>
        </div>

        <div label="Project 5">
          Nothing to see here, this tab is <em>extinct</em>!
          <Container>
            <Card imgsrc={AnimePic}></Card>
          </Container>
        </div>

        <div label="Project 6">
          Nothing to see here, this tab is <em>extinct</em>!
          <Container>
            <Card imgsrc={AnimePic}></Card>
          </Container>
        </div>
      </TabNav>
    </div>
  );
}

export default Projects;
