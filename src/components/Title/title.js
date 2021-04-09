import React from "react"
import "./title.css"
import {motion} from "framer-motion"


const Textbox=(props)=>{
    return(
        <>
        <div id="cyanBG">
        <motion.h2 
            initial={{x:"-100vw"}}
            animate={{x:0}}
            transition={{delay:.5, duration:1}}

        id="name">{props.name}</motion.h2>

        <motion.h6 
                initial={{x:"100vw"}}
                animate={{x:0}}
                transition={{delay:.7, duration:1.1}}
                id='subTitle'>{props.subTitle} </motion.h6>
        </div>
        </>
    )
}

export default Textbox