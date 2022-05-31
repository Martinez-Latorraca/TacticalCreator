 import { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ text, colors, defaultColor}) => {
  const [toggleColorPickerBase, setToggleColorPickerBase] = useState(false);
  const [baseColorsPicked, setBaseColorsPicked] = useState();

  const toggleBaseColor = () => {
    setToggleColorPickerBase(!toggleColorPickerBase);
  };

  return (
    <div className="wrapper-btn">
      <div
        className="btn-color"
        style={{ backgroundColor: defaultColor }}
        onClick={toggleBaseColor}
      >
        {toggleColorPickerBase && (
          <div>
            <SketchPicker
              color={baseColorsPicked}
              onChange={(e)=> colors(e.hex)}
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
