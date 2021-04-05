import React from "react"
import "./title.css"



const Textbox=(props)=>{
    return(
        <>
        <h2 id="name">{props.name}</h2>

        <h6 id='subTitle'>{props.subTitle}</h6>
        </>
    )
}

export default Textbox