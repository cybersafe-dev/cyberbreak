import React from "react";
import Clouds from "../../assets/images/og-logo2022.png";
import Sun from "../../assets/images/sun.svg";

import "./Landing.css";

const LandingHeader = () => (
  <main className="landing-header">
    <img src={Clouds} alt="clouds" className="clouds" />
    <img src={Sun} alt="sun" className="sun" />
  </main>
);

export default LandingHeader;
