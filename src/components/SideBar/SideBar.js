import React from "react";
import "./SideBar.css";
import NavIcon from "../NavIcon/NavIcon";

function SideBar() {
  return (
    <div className="vertical-nav">
      <div className="vertical-nav-div">
        <NavIcon pic="yoga" />
        <NavIcon pic="swim" />
        <NavIcon pic="bike" />
        <NavIcon pic="dumbbell" />
      </div>
      <p className="vertical-nav-text">Copyright, SportSee 2020</p>
    </div>
  );
}

export default SideBar;
