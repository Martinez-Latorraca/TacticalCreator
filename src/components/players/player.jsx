import "../../App.css"
import image from "./img/goalkeeperhome.png" 
import image2 from "./img/g18003.png"
import { useState } from "react"



const Player = () => {

    const[position, setPosition] = useState(0);
    const onPlayerClick = ()=>{
        console.log("drag")
    }
    

return (
    
  // <div className="playerHome" style={{backgroundImage: `url(${image})`}}></div>
   <div className="playerHome" style={{backgroundImage: `url(${image2})` }} onDrag={onPlayerClick}></div>
    
);
} 

export default Player;