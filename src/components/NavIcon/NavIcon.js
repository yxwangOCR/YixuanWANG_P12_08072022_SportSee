import React from "react";
import icons from "../../Icons/Icons.js";
import PropTypes from "prop-types";
import "./NavIcon.css";

function NavIcon({ icon }) {
  return (
    <div className="nav-icon">
      <img src={icons[icon]} alt="icon" />
    </div>
  );
}

NavIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default NavIcon;
