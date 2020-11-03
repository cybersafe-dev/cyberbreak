import React from "react";
import { Link } from "react-router-dom";
import LandingHeader from "./LandingHeader";
import Ptsb from "../../assets/images/wyt-ptsb.png";
import HappyHappyGame from "../../assets/sounds/Happy Happy Game Show.mp3";
import { click } from "../../utils/click";
import "./Landing.css";

const Landing = () => {
  const ref = React.createRef();
  return (
    <main className="landing-container">
      <LandingHeader />
      <h1 className="landing-title">CyberSafe Family Quiz</h1>
      <p className="landing-text">
        Are you a CyberSafe Family? Are you sure? Take our fun family quiz to
        see how safe you really are!
      </p>
      <Link to="/form" className="btn" onClick={() => click.play()}>
        Lets Go!
      </Link>
      <img src={Ptsb} alt="" className="land-ptsb-logo" />
      <audio ref={ref} src={HappyHappyGame} autoPlay loop={true} />
    </main>
  );
};

export default Landing;
