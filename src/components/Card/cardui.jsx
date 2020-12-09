import React from 'react'

import "./card-style.css";
const MyCard= props =>{
    return(
        <div className="card text-center">
            <div classname= "overflow">
                <img src={props.imgsrc} alt="cardimg" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                <ul class="list-group list-group-flush">
                            <li class="list-group-item"></li>
                            <a href="#" className= "btn btn-outline-dark">Github</a>
                            <li class="list-group-item"></li>
                            <a href="#" className= "btn btn-outline-dark">Link</a>
                            <li class="list-group-item"></li>
                            <a href="#" className= "btn btn-outline-dark">Learn more</a>
                            </ul>
                </p>
                
            </div>
        </div>
    )

}

export default MyCard