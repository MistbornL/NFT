import React from "react";

function Popular({ first_word, second_word }) {
  return (
    <div className="popular">
      <h1>
        {first_word} <span>{second_word}</span>
      </h1>
      <button className="view_all">View All</button>
    </div>
  );
}

export default Popular;
