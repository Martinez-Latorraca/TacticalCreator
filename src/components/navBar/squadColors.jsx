import "./squadColors.css";
import { useEffect, useState } from "react";
import ColorPicker from "./colorPicker";

const SquadColors = ({ setSquadColors, colors }) => {
  const [baseColor, setBaseColor] = useState(colors.font);
  const [secondColor, setSecondColor] = useState(colors.border);
  const [thirdColor, setThirdColor] = useState(colors.bgr);

   useEffect(() => {
    colors = {
      font: baseColor, 
      border: secondColor, 
      bgr: thirdColor 
    };
    setSquadColors(colors);
  }, []);


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
