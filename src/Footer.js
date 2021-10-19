import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-one">
          <h1 className="footer-title animate__animated animate__bounce">
            {" "}
            MissAudioVideo
          </h1>
          <p className="footer-text">@MissAudioVideo</p>
          <p className="footer-text">All rights reserved 2021</p>
          <p className="footer-text">Terms And Conditions apply</p>
        </div>
        <div className="footer-two">
          <h1 className="footer-title animate__animated animate__bounce">
            Services
          </h1>
          <p className="footer-text">Design</p>
          <p className="footer-text">Technology</p>
          <p className="footer-text">Neuromarketing</p>
        </div>
        <div className="footer-three">
          <h1 className="footer-title animate__animated animate__bounce">
            About
          </h1>
          <p className="footer-text">Team</p>
          {/* <p className="footer-text">Work</p> */}
          {/* <p className="footer-text">Clients</p> */}
          <p className="footer-text">Carreer</p>
          <p className="footer-text">Knowledge</p>
          <p className="footer-text">Reach Us Privavy Policy</p>
        </div>
        {/* <div className="footer-four">
        <h1 className="footer-title">Hello I am footer</h1>
        <p className="footer-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, dolor.
        </p>
      </div> */}
      </div>
      <div className="footer-last">
        <center>@copyright-20 21 All rights reseved.</center>
      </div>
    </>
  );
};

export default Footer;
