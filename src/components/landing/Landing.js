import React from "react";
import { Link } from "react-router-dom";
import LandingHeader from "./LandingHeader"

import "./Landing.css"

const Landing = () => (
  <>
  <LandingHeader />
  <main className="landing-container">
    <h1 className="landing-title">Cyber Break</h1>
    <p className="landing-text">
      Welcome! We are delighted you are interested in participating in the first
      ever CyberSafeIreland Cyber Break, by disconnecting from devices and the
      online world to reconnect with your family for a whole 24 hours!
    </p>

  </main>
  <Link to="/form" className="btn">Lets Go!</Link>
  </>
);

export default Landing;
