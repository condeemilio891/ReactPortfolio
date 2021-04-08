
import {useState, useEffect} from 'react';
import Player from './Player';
import "./Radio.css"


function Radio() {
  const [songs] = useState([
    { title:"Luminescence (Stellaris-2016)",
      artist: "Andres Waldorf",
      img_src:"/images/Stellaris.jpg",
      src: process.env.PUBLIC_URL+"/music/luminescence.mp3"
      
    },
    {
      title:"Alison (1993)",
      artist:"SlowDive ",
      img_src:"/images/Souvlaki.jpg",
      src:process.env.PUBLIC_URL+"/music/Alison.mp3"
    },
    {title:"Time (1973)",
      artist: "Pink Floyd ",
      img_src:"/images/DarkSide.jpg",
      src: process.env.PUBLIC_URL+"/music/Time.mp3"
      },
    {
      title:"Only Tommorow (2013)",
      artist: "My Bloody Valentine ",
      img_src:"/images/MBV.jpg",
      src: process.env.PUBLIC_URL+"/music/onlyTomorrow.mp3"
    },
    {
      title: "Terran 3 (Starcraft-1998)",
      artist: "Blizzard Entertainment ",
      img_src: "/images/starcraft-original-box.webp",
      src: process.env.PUBLIC_URL+ "/music/Terran3Starcraft.mp3"
    },
    {
      title:" Space Jam (1996)",
      artist:"Quad City DJ's",
      img_src:"/images/spacejamcover.jpg",
      src: process.env.PUBLIC_URL +"/music/SpaceJamThemeSong.mp3"
    },
   
    {
      title: "Faster Than Light (2016)",
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