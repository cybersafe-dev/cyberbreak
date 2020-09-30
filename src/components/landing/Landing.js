import React from "react";
import { Link } from "react-router-dom";
import LandingHeader from "./LandingHeader";
import Ptsb from "../../assets/images/wyt-ptsb.png";
import HappyHappyGame from "../../assets/sounds/Happy Happy Game Show.mp3";
import { click } from "../../utils/click";
import "./Landing.css";

const Landing = () => {
  const ref = React.createRef();
  if (!HappyHappyGame) {
    return <h1>loading</h1>
  }
  return (
    <main className="landing-container">
      <LandingHeader />
      <h1 className="landing-title">Cyber Break</h1>
      <p className="landing-text">
        Welcome! We are delighted you are interested in participating in the
        first ever CyberSafeIreland Cyber Break, by disconnecting from devices
        and the online world to reconnect with your family for a whole 24 hours!
      </p>
      <img src={Ptsb} alt="" className="ptsb-logo" />
      <Link to="/form" className="btn" onClick={() => click.play()}>
        Lets Go!
      </Link>
      <audio ref={ref} src={HappyHappyGame} autoPlay loop={true} />
    </main>
  );
};

export default Landing;
