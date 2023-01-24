import "./player.css";
import { useState, useRef, useEffect } from "react";
import playerImage from "./img/g18003.png";
import useDrag from "../../hooks/useDrag";

const Player = ({ playerNumber, colors }) => {
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
        color: colors.font,
        border: `4px solid ${colors.border}`,
        backgroundColor: colors.bgr,
      }}
      onDrag={onPlayerClick}
    >
      {playerNumber}
    </div>
  );
};

export default Player;
