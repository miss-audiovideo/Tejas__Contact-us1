import React from "react";
import Lottie from "react-lottie";
import animationData from "./lotties/email.json";
import "./Home.css";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div className="Home-one">
      <div className="Home-two">
        {/* left div */}
        <div className="Home-three-one">
          <h1 className="Home-title animate__animated animate__backInLeft">
            <span>Lets</span>
            <br />
            <span> Create</span> <br />
            <span>Experiences !!!</span>
          </h1>
          <p className="Home-phrase animate__animated animate__flip">
            {" "}
            Lets have a talk...
          </p>
        </div>
        {/* right div  */}
        <div className="Home-three-two">
          <Lottie className="Home-lottie" options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default Home;
