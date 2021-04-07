import React from "react"
import "./title.css"



const Textbox=(props)=>{
    return(
        <>
        <div id="cyanBG">
        <h2 id="name">{props.name}</h2>

        <h6 id='subTitle'>{props.subTitle}</h6>
        </div>
        </>
    )
}

export default Textbox