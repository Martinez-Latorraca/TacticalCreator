import { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ text, color }) => {
  const [toggleColorPickerBase, setToggleColorPickerBase] = useState(false);
  const [baseColorsPicked, setBaseColorsPicked] = useState("black");

  const toggleBaseColor = () => {
    setToggleColorPickerBase(!toggleColorPickerBase);
  };

  const handleBaseColor = (e) => {
    setBaseColorsPicked(e.hex);
    console.log(e.hex);
    color(e.hex);
  };

  return (
    <div className="wrapper-btn">
      <div
        className="btn-color"
        style={{ backgroundColor: baseColorsPicked }}
        onClick={toggleBaseColor}
      >
        {toggleColorPickerBase && (
          <div>
            <SketchPicker
              color={baseColorsPicked}
              onChange={handleBaseColor}
              style={{ userSelect: "none" }}
            ></SketchPicker>
          </div>
        )}
      </div>
      <p className="subtitle">{text}</p>
    </div>
  );
};

export default ColorPicker;
