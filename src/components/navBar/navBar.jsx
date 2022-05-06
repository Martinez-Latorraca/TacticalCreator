import React, { useState, useEffect } from "react";
import "./navBar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };


  return (
    <nav>
      {(toggleMenu) && (
        <ul className="list">
          <li className="items">Home</li>
          <li className="items">Services</li>
          <li className="items">Contact</li>
        </ul>
      )}

      <div onClick={toggleNav} className="btn">
        "Menu"
      </div>
    </nav>
  );
}
