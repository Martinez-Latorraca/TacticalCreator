import React, { useEffect, useState } from "react";
import formations from "../../components/formations/img/formationsIcon.png";
import squadSizeIcon from "./squadSize.png";
import "./navBar.css";
import SquadSize from "./squadSize";

export default function Navbar({ setSquadNumber }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMenuSize, setToggleMenuSize] = useState(false);
  const [toggleBtnFormations, setToggleBtnFormations] = useState(true);
  const [toggleBtnSquadSize, setToggleBtnSquadSize] = useState(true);
  const [squadSize, setSquadSize] = useState(8);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    setToggleBtnFormations(!toggleBtnFormations);
  };

  const toggleSquadSize = () => {
    setToggleMenuSize(!toggleMenuSize);
    setToggleBtnSquadSize(!toggleBtnSquadSize);
  };
  useEffect(() => {
    console.log(squadSize, "navbar");
    setSquadNumber(squadSize);
  });

  return (
    <nav>
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
          <a href="#" className="close" onClick={toggleNav}></a>
          <li className="items">Home</li>
          <li className="items">Services</li>
          <li className="items">Contact</li>
        </ul>
      )}
      {toggleMenuSize && (
        <ul className="list">
          <a href="#" className="close" onClick={toggleSquadSize}></a>
          <SquadSize setSquadSize={setSquadSize}></SquadSize>
        </ul>
      )}
    </nav>
  );
}
