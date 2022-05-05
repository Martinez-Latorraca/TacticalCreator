import "../../App.css";
import image2 from "./img/player1.png";
import { useState, useRef } from "react";
import useDrag from "../../hooks/useDrag";

const Player = () => {
  const divRef = useRef();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const onPlayerClick = (e) => {
    setPosition({
      x: position.x + e.movementX,
      y: position.y + e.movementY,
    });
  };
  const drag = useDrag(divRef, [position], {
    onDrag: onPlayerClick,
  });

  return (
    // <div className="playerHome" style={{backgroundImage: `url(${image})`}}></div>
    <div
      ref={divRef}
      className="playerHome"
      style={{
        backgroundImage: `url(${image2})`,
        transform: `translateX(${position.x}px) translateY(${position.y}px)`,
      }}
      onDrag={onPlayerClick}
    ></div>
  );
};

export default Player;
