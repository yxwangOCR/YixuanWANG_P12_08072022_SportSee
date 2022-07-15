import React from "react";
import "./SideBar.css";
import NavIcon from "../NavIcon/NavIcon";

function SideBar() {
  return (
    <div className="vertical-nav">
      <div className="vertical-nav-div">
        <NavIcon icon="yoga" />
        <NavIcon icon="swim" />
        <NavIcon icon="bike" />
        <NavIcon icon="dumbbell" />
      </div>
      <p className="vertical-nav-text">Copyright, SportSee 2020</p>
    </div>
  );
}

export default SideBar;
