import "./squadColors.css";
import { useEffect, useState } from "react";
import ColorPicker from "./colorPicker";

const SquadColors = ({ setSquadColors }) => {
  const [baseColor, setBaseColor] = useState("black");
  const [secondColor, setSecondColor] = useState("white");
  const [thirdColor, setThirdColor] = useState("red");

 
  const colors = {
    font:baseColor, 
    border:secondColor, 
    bgr:thirdColor 
  };
  

  return (
    <div>
      <div className="content">
        <p className="title">Select team design</p>
        <ColorPicker
          text={"Base color"}
          color={setBaseColor}
          defaultColor={baseColor} 
        ></ColorPicker>
        <ColorPicker
          text={"Second color"}
          color={setSecondColor}
          defaultColor={secondColor}
        ></ColorPicker>
        <ColorPicker
          text={"Third color"}
          color={setThirdColor}
          defaultColor={thirdColor}
        ></ColorPicker>
      </div>
    </div>
  );
};

export default SquadColors;
