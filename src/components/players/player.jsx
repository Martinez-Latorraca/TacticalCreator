import "./player.css";
import playerImage from "./img/g18003.png";
import { useState, useRef } from "react";
import useDrag from "../../hooks/useDrag";

const Player = ({ playerNumber }) => {
  const divRef = useRef();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const onPlayerClick = (e) => {
    setPosition({
      x: position.x + e.movementX,
      y: position.y + e.movementY,
    });
  };
  // eslint-disable-next-line no-unused-vars
  const drag = useDrag(divRef, [position], {
    onDrag: onPlayerClick,
  });

  return (
    <div
      ref={divRef}
      className="playerHome"
      style={{
        backgroundImage: `url(${playerImage})`,
        transform: `translateX(${position.x}px) translateY(${position.y}px)`,
        color: "white",
        border: "4px solid black",
        backgroundColor: "aqua",
      }}
      onDrag={onPlayerClick}
    >
      {playerNumber}
    </div>
  );
};

export default Player;
