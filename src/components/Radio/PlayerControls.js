import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import {motion} from "framer-motion"

function PlayerControls(props) {
    return (
        <div className="c-player--controls">
            <motion.button 
            whileHover={{
                scale:1.1,
                color:"#00008B"

            }}
            className="skip-btn" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </motion.button>
            <motion.button
            whileHover={{scale:1.1,
                        color:"#00008B",
                        backgroundColor:"blue"}}
            className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying) }>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} 
                 
                 />
            
            </motion.button>

            <motion.button 
            whileHover={{
                scale:1.1,
                color:"#00008B"
                
            }}
            className="skip-btn" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </motion.button>
        </div>
    )
}

export default PlayerControls