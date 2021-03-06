import React from 'react'
import {motion} from "framer-motion"

function PlayerDetails(props) {
    return (
        <div className="c-player--details">
            <div className="details-img">
                <motion.img 
               
                src={process.env.PUBLIC_URL+ props.song.img_src} alt="images" />
            </div>
            <motion.h3 className="details-title">{props.song.title}</motion.h3>
            <h4 className="details-artist">{props.song.artist}</h4>
        </div>
    )
}

export default PlayerDetails