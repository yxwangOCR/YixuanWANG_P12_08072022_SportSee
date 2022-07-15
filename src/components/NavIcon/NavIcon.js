import React from "react";
import icons from "../../Icons/Icons.js";
import PropTypes from "prop-types";
import "./NavIcon.css";

function NavIcon(props) {
  return (
    <div className="nav-icon">
      <img src={icons[props.icon]} alt="icon" />
    </div>
  );
}

NavIcon.propTypes = {
  icon: PropTypes.string,
};
/** One common usage of the PropTypes.element validator is in ensuring that a component has a single child.
 * If the component has no children or multiple children, a warning is displayed on the JavaScript console.*/

export default NavIcon;
