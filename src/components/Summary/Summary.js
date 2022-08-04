import React from "react";
import "./Summary.css";
import NavIcon from "../NavIcon/NavIcon";

function Summary({ keyData }) {
  return (
    <div className="summary-container">
      <div className="summary-icon-container">
        <div className="tag">
          <NavIcon icon="fire" />
          <div className="tag-text">
            <span>{keyData?.calorieCount}kCal </span>
            <span className="small">Calories</span>
          </div>
        </div>

        <div className="tag">
          <NavIcon icon="chicken" />
          <div className="tag-text">
            <span>{keyData?.proteinCount}g </span>
            <span className="small">Poteines</span>
          </div>
        </div>
        <div className="tag">
          <NavIcon icon="apple" />
          <div className="tag-text">
            <span>{keyData?.carbohydrateCount}g </span>
            <span className="small">Glucides</span>
          </div>
        </div>
        <div className="tag">
          <NavIcon icon="burger" />
          <div className="tag-text">
            <span>{keyData?.lipidCount}g </span>
            <span className="small">Lipides</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
