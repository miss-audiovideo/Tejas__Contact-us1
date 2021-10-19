import React, { useState } from "react";
import "./Navbar.css";
// import "../App.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/Home">Home</a>
          <a href="/Feedback">Feedback</a>
          <a href="/About Us">AboutUs</a>
          <a href="/Contact">Contact</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>Open</button>
      </div>
      <div className="rightSide">MissAudioVideo</div>
    </div>
  );
};

export default Navbar;
