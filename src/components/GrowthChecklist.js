import React from "react";
import "./Widget.css";

const GrowthChecklist = () => {
  return (
    <div className="widget growth-checklist">
      <h2>
        <i className="widget-icon">&#x1F4DD;</i> Growth Checklist
      </h2>
      <ul>
        <li>Complete project documentation</li>
        <li>Attend team meetings</li>
        <li>Update progress reports</li>
      </ul>
    </div>
  );
};

export default GrowthChecklist;
