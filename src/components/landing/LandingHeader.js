import React from "react";
import Clouds from "../../images/clouds.svg"
import Sun from "../../images/sun-logo.svg"

import "./Landing.css"


const LandingHeader = () => (
  <main className="landing-header">
    <img src={Clouds} alt="" className="clouds"/>
    <img src={Sun} alt="" className="sun"/>
  </main>
);

export default LandingHeader;
