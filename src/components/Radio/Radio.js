
import {useState, useEffect} from 'react';
import Player from './Player';
import "./Radio.css"


function Radio() {
  const [songs] = useState([
    { title:"Luminescence (Stellaris)",
      artist: "Andres Waldorf",
      img_src:"/images/Stellaris.jpg",
      src: process.env.PUBLIC_URL+"/music/luminescence.mp3"
      
    },
    {
      title:" Space Jam theme",
      artist:"Quad City DJ's",
      img_src:"/images/spacejamcover.jpg",
      src: process.env.PUBLIC_URL +"/music/SpaceJamThemeSong.mp3"
    },
    {
      title: "Terran 3 (Starcraft)",
      artist: "Blizzard Entertainment",
      img_src: "/images/starcraft-original-box.webp",
      src: process.env.PUBLIC_URL+ "/music/Terran3Starcraft.mp3"
    },
    {
      title: "Faster Than Light",
      artist: "Andreas Waldetoft (feat. Mia Stegmar)",
      img_src:"/images/Stellaris.jpg",
      src: process.env.PUBLIC_URL +"/music/FTL.mp3"
    },
   

 
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}


export default Radio;