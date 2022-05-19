import React from "react";

export const SmallDiv = ({ item }) => {
  return (
    <div className="small-div">
      <p>{item.top}</p>
      <h1>{item.middle}</h1>
      <p>{item.bottom}</p>
    </div>
  );
};
