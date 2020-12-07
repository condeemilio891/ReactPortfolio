import React from 'react'
import Yoda from "../../assets/yoda.jpeg"
import "./card-style.css";
const Card= props =>{
    return(
        <div className="card text-center">
            <div classname= "overflow">
                <img src={props.imgsrc} alt="yoda" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                <ul class="list-group list-group-flush">
                            <li class="list-group-item">Github</li>
                            <a href="#" className= "btn btn-outline-success">Github</a>
                            <li class="list-group-item">Active Link</li>
                            <a href="#" className= "btn btn-outline-success">Link</a>
                            <li class="list-group-item">Learn more</li>
                            <a href="#" className= "btn btn-outline-success">Learn more</a>
                            </ul>
                </p>
                
            </div>
        </div>
    )

}

export default Card