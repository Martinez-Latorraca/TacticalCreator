import React, { useEffect, useState } from "react";
import formations from "../../components/formations/img/formationsIcon.png";
import squadSizeIcon from "./squadSize.png";
import "./navBar.css";
import SquadSize from "./squadSize";
import SquadColors from "./squadColors";

export default function Navbar({
  setSquadNumber,
  setHomeColors,
  setAwayColors,
}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMenuSize, setToggleMenuSize] = useState(false);
  const [toggleBtnFormations, setToggleBtnFormations] = useState(true);
  const [toggleBtnSquadSize, setToggleBtnSquadSize] = useState(true);
  const [squadSize, setSquadSize] = useState(8);

  const awayColors = {
    font: "black",
    border: "white",
    bgr: "red",
  };

  const homeColors = {
    font: "red",
    border: "black",
    bgr: "white",
  };

  const [squadHomeColors, setSquadHomeColors] = useState(homeColors);
  const [squadAwayColors, setSquadAwayColors] = useState(awayColors);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    setToggleBtnFormations(!toggleBtnFormations);
  };

  const toggleSquadSize = () => {
    setToggleMenuSize(!toggleMenuSize);
    setToggleBtnSquadSize(!toggleBtnSquadSize);
  };
  useEffect(() => {
    setSquadNumber(squadSize);
    setHomeColors(squadHomeColors);
    setAwayColors(squadAwayColors);
  });

  return (
    <>
      <div className="btn-wrapper">
        <div onClick={toggleNav} className="btn-formations">
          <img src={formations} alt="" />
        </div>
        <div onClick={toggleSquadSize} className="btn-squad-size">
          <img src={squadSizeIcon} alt="" />
        </div>
      </div>
      {toggleMenu && (
        <ul className="list">
          <div className="close" onClick={toggleNav}></div>
          <div className="wrap-items">
            <li className="items">Home</li>
            <li className="items">Services</li>
            <li className="items">Contact</li>
          </div>
        </ul>
      )}
      {toggleMenuSize && (
        <ul className="list">
          <div className="close" onClick={toggleSquadSize}></div>
          <div className="wrap-items">
            <SquadSize setSquadSize={setSquadSize}></SquadSize>
            <SquadColors
              setSquadColors={setSquadHomeColors}
              colors={homeColors}
            ></SquadColors>
            <SquadColors
              setSquadColors={setSquadAwayColors}
              colors={awayColors}
            ></SquadColors>
          </div>
        </ul>
      )}
    </>
  );
}
