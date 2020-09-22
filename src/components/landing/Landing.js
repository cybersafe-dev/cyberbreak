import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <main>
    <h1>Cyber Break</h1>
    <p>
      Welcome! We are delighted you are interested in participating in the first
      ever CyberSafeireland Cyber Break, by disconnecting from devices and the
      online world to reconnect with your family for a whole 24 hours!
    </p>
    <Link to="/form">Lets Go!</Link>
  </main>
);

export default Landing;
