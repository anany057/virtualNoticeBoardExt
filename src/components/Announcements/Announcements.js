import React from "react";
import "./Announcements.css";
import "../Widget.css";

const Announcements = () => {
  return (
    <div className="widget announcements">
      <div className="aheading">
      <h2>
        {/* <i className="widget-icon">&#x1F4E2;</i> */}
        Announcements
      </h2>
      </div>
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vSm4GlkLUSoC4HxTtTFuNBMsD_5EuvQuokaxo8JDa0h8rb1fL7U1ikwM0IMvmyl3cf7dkbBCXo5AWLQ/pub?embedded=true"
        title="announcement"
        height="380"
        width="95%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      ></iframe>

      {/* above annoucement is word doc you can try and see which one looks better  */}


      {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQeXgWU9VMGWI6XUwvrXvz-KnoxO2N1ZorNYTPdGnxVjp4RxP-tC0UwhiSX3MuaB-jmDie_sikD0shh/pubhtml?widget=true&amp;headers=false"
      title="announcement"
      width="100%"
      height="300"
      ></iframe> */}
    </div>
  );
};

export default Announcements;
