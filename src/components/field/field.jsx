import "./field.css";
import { useEffect, useState } from "react";
import pitch from "./pitch.png";
import lines from "./lines.png";
import circles from "./circles.png";
import squares from "./squares.png";

const Field = ({param}) => {
  const [imageParam, setImageParam] = useState();

  useEffect(() => {
    const getImagePattern = () => {
      switch (param) {
        case "Lines":
          return lines;
        case "Squares":
          return squares;
        case "Circles":
          return circles;
        default:
          return circles;
      }
    };
    setImageParam(getImagePattern());
  }, [param]);

  return (
    <div className="wrapper">
      <img className="pitch" src={pitch}></img> 
      <img className="pattern" src={imageParam} alt="" />
    </div>
    
  );
};

export default Field;
