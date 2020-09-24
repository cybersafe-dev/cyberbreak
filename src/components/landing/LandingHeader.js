import React from "react";
import Clouds from "../../assets/images/cloud-logo.svg"
import Sun from "../../assets/images/sun.svg"

import "./Landing.css"


const LandingHeader = () => (
  <main className="landing-header">
    <img src={Clouds} alt="" className="clouds"/>
    <img src={Sun} alt="" className="sun"/>
  </main>
);

export default LandingHeader;
