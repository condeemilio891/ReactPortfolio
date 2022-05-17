
import {useState, useEffect} from 'react';
import Player from './Player';
import "./Radio.css"



function Radio() {
  const [songs] = useState([



    {
      title: "Rocket Man",
      artist: "Elton John",
      img_src:"/images/HonkyChâteau.jpg",
      src: process.env.PUBLIC_URL + "/music/Rocketman.mp3"
    },

    

    {
      title:"Luminescence",
      artist:"Andres Waldorf and Bert Meyer ",
      img_src:"/images/Stellaris.jpg",
      src: process.env.PUBLIC_URL +"/music/luminescence.mp3"
    }, 
    {
      title : "StarBoy",
      artist: "The Weeknd + Daft Punk",
      img_src:"/images/Starboy.jpg",
      src: process.env.PUBLIC_URL+ "/music/Starboy.mp3"
    },

    {
      title: "Terran 3 (Starcraft-1998)",
      artist: "Blizzard Entertainment ",
      img_src: "/images/starcraft-original-box.webp",
      src: process.env.PUBLIC_URL+ "/music/Terran3Starcraft.mp3"
    },
   
    {
      title: "Terminally Chill",
      artist: "Neon Indian",
      img_src: "/images/PsychicChasms.jpg",
      src: process.env.PUBLIC_URL +"/music/TerminallyChill.mp3"
    },
  
    {
      title: "Machine Gun",
      artist: " Slowdive",
      img_src: "/images/Souvlaki.jpg",
      src: process.env.PUBLIC_URL+"/music/MachineGun.mp3"
    },
    {
      title:"Nangs(2015)",
      artist:"Tame Impala",
      img_src:"/images/Currents.jpg",
      src:process.env.PUBLIC_URL+"/music/Nangs.mp3"
    },

    {
      title: "One More Time(2011)",
       artist: "Daft Punk",
       img_src:"/images/Discovery.jpg",
       src: process.env.PUBLIC_URL+"/music/OneMoreTime.mp3"
    },

    {
      title: "Ship Of Fools",
      artist: "Grateful Dead",
      img_src: "/images/MarsHotel.jpg",
      src: process.env.PUBLIC_URL + "music/shipOfFools.mp3"
    },


    {
      title:"Sometimes(1991)",
      artist:"My Bloddy Valentine",
      img_src:"/images/loveless.jpg",
      src: process.env.PUBLIC_URL+"/music/Sometimes.mp3"   
    },  
  
    { title:"Riding the Solar Wind (Stellaris-2016)",
      artist: "Andres Waldorf and Bert Meyer ",
      img_src:"/images/Stellaris.jpg",
      src: process.env.PUBLIC_URL+"/music/RidingTheSolarWind.flac"
      
    },


    
    {
      title:"Alison (1993)",
      artist:"SlowDive ",
      img_src:"/images/Souvlaki.jpg",
      src:process.env.PUBLIC_URL+"/music/Alison.mp3"
    },
  
    
    {
      title:"Only Tommorow (2013)",
      artist: "My Bloody Valentine ",
      img_src:"/images/MBV.jpg",
      src: process.env.PUBLIC_URL+"/music/onlyTomorrow.mp3"
    },
    {
      title: "Faster Than Light (2016)",
      artist: "Andreas Waldetoft (feat. Mia Stegmar)",
      img_src:"/images/Stellaris.jpg",
      src: process.env.PUBLIC_URL +"/music/FTL.mp3"
    },
 
    {title:"Time (1973)",
      artist: "Pink Floyd ",
      img_src:"/images/DarkSide.jpg",
      src: process.env.PUBLIC_URL+"/music/Time.mp3"
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