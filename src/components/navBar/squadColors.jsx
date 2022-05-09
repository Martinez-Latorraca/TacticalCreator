import "./squadColors.css";
import { useState } from "react";
import ColorPicker from "./colorPicker";

const SquadColors = ({ setSquadColors }) => {
  const [baseColor, setBaseColor] = useState("black");
  const [secondColor, setSecondColor] = useState("white");
  const [thirdColor, setThirdColor] = useState("white");

  return (
    <div>
      <div className="content">
        <p className="title">Select team design</p>
        <ColorPicker
          text={"Base color"}
          setBaseColor={setBaseColor}
        ></ColorPicker>
        <ColorPicker
          text={"Second color"}
          setSecondColor={setSecondColor}
        ></ColorPicker>
        <ColorPicker
          text={"Third color"}
          setThirdColor={setThirdColor}
        ></ColorPicker>
      </div>
    </div>
  );
};

export default SquadColors;
