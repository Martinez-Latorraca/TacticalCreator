import { useEffect, useState } from "react";
import "./squadSize.css";

const SquadSize = ({ props }) => {
  const [squadSize, setSquadSize] = useState(8);

  useEffect(() => {
    props.setSquadSize(squadSize);
  });

  return (
    <div>
      <div className="content">
        <p className="title">Squad Size</p>
        <div className="btns">
          <div className="btn" onClick={setSquadSize(5)}>
            5
          </div>
          <div className="btn" onClick={setSquadSize(7)}>
            7
          </div>
          <div className="btn" onClick={setSquadSize(8)}>
            8
          </div>
          <div className="btn" onClick={setSquadSize(9)}>
            9
          </div>
          <div className="btn" onClick={setSquadSize(11)}>
            11
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquadSize;
