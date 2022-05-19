import React from "react";
import Div_Info from "../../dummyData/data_for_sd";
import { SmallDiv } from "./SmallDiv";
import "./index.css";

export const PriceHistory = () => {
  return (
    <div className="description">
      <h1>Properties</h1>
      <div className="line-for-div"></div>
      <div className="hider"></div>
      <div className="div-wrapper">
        {Div_Info.map((item) => (
          <SmallDiv item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
