import React from "react";
import "./GoogleForm.css";
import "../Widget.css";

const GoogleForm = () => {
  return (
    <div className="widget google-form">
      <div className="fheading">
      <h2>
        <i className="widget-icon">&#x1F4DD;</i> Google Form
      </h2>
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSch9o-Ca0FkMJB0WA9RUk-uYLTbB8w3D3_gs8oUPxaaFSELkg/viewform?embedded=true"
        title="Embedded Google Form"
        width="100%"
        height="400"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        allowFullScreen
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
