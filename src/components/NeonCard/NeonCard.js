import React from "react";
import "./NeonCard.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const NeonCard=(props)=> {
  return ( 
      <div className="neonContainer">
          <div className="neonBox" >
              <span>
                  <div className ="neonContent">
                      <h2>{props.cardTitleLeft}</h2>
                      <p>{props.cardTextLeft}
                      </p>
                      
                  </div>
              </span>
          </div>
           <div className="neonBox" >
              <span>
                  <div className ="neonContent">
                      <h2>Skills used</h2>
                      <p> {props.cardTextRight}
                      </p>
                      
                  </div>
              </span>
          </div>
          {/* <div className="neonBox" >
              <span>
                  <div className ="neonContent">
                      <h2>Card Two</h2>
                      <p>fdsjasdljkfflskalkdsaflkdflhdsalk
                          dfsahflskdajflkdahfkshdaf
                      </p>
                      <a href="#">read more</a>
                  </div>
              </span>
          </div> */}
      </div>
   
  )
}


export default NeonCard;
