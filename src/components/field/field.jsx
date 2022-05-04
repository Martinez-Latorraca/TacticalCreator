import "../../App.css";
import { useEffect, useState } from "react";
import pitch from "./pitch.png";
import lines from "./lines.png";
import circles from "./circles.png";
import squares from "./squares.png";

const Field = ({param}) => {
  const images = [`url(${pitch})`];
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
  
  images.push(`url(${imageParam})`);  
  images.join(",");

  return (
    <div className="pitch"
      style={{
        backgroundImage: images,
        
      }}
    ></div>
  );
};

export default Field;
