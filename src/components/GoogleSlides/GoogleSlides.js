import React from "react";
import "./GoogleSlides.css";
import "../Widget.css";

const GoogleSlides = () => {
  return (
    <div className="widget google-slides">
      <div className="gheading">
        <h2>Google Slides</h2>
      </div>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vRST5J5Sa-E5x6jib-KHSHup5qpz58RUpAbbemdpT5kgYOqYoP4QfZFuXlEgtPyP6eVi1mGXMjQ2G0-/embed?start=true&loop=true&delayms=3000"
        frameBorder="0"
        width="590"
        height="380"
        allowFullScreen
        title="Google Slides Presentation"
      ></iframe>
    </div>
  );
};

export default GoogleSlides;
