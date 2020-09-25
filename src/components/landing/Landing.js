import React from "react";
import { Link } from "react-router-dom";
import LandingHeader from "./LandingHeader";
import Ptsb from "../../assets/images/blk-ptsb.svg";
import UIfx from "uifx";
import HappyHappyGame from "../../assets/sounds/Happy Happy Game Show.mp3";
import clickMp3 from "../../assets/sounds/finger-snap.mp3";

import "./Landing.css";
const click = new UIfx(clickMp3)
const landing = new UIfx(HappyHappyGame);
landing.play(0.5); 

const Landing = () => {
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
    </main>
  );
};

export default Landing;
