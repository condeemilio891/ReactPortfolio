import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./card-style.css";
const MyCard = (props) => {
  return (
    <div className="card text-center">
      <div classname="overflow">
        <img src={props.imgsrc} alt="cardimg" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"></li>
            <a href={props.activeGit} className="btn btn-outline-dark">
              Github
            </a>
            <li class="list-group-item"></li>
            <a href={props.activeLink} className="btn btn-outline-dark">
              Link
            </a>
            <li class="list-group-item"></li>
            <div>
              <Accordion defaultActiveKey="0">
                <Card style={{ width: '18rem' }}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Learn More
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body><p>{props.text} </p></Card.Body>
                  </Accordion.Collapse>
                </Card>
             
              </Accordion>
            </div>
     
         
          </ul>
        </p>
      </div>
    </div>
  );
};

export default MyCard;
