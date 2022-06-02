import React from "react";
import "./index.scss";
import triangle from "../../../ui/Vector.svg";

export const TopSellers = ({ item }) => {
  return (
    <div className="section-top">
      <div>
        <ul style={{ display: "flex", justifyContent: "center" }}>
          <li>
            <img src={item.userImg} alt="icon" />
            <div className="section-top-left">
              <span>{item.title}</span>
              <p>{item.dollar}</p>
            </div>
            <div className="rate">
              <span>
                <img src={triangle} alt="triangle" />
              </span>
              <span>1.25 %</span>
            </div>
          </li>
        </ul>
        <div className="bottom-line"></div>
      </div>
    </div>
  );
};
