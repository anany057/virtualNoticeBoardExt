import React from "react";
import "./Widget.css";

const Polls = () => {
  return (
    <div className="widget polls">
      <h2>What's your favorite color?</h2>
      <button>Blue</button>
      <button>Green</button>
      <button>Red</button>
      <button>Yellow</button>
    </div>
  );
};

export default Polls;
