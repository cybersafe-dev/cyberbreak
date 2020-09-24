import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import Lamp from "../../assets/images/lamp.svg"

const Error = () => (
  <main className="error-container">
    <h1 className="error-heading">404: Page not found</h1>
    <Link to="/" className="back-start">Back to the start</Link>
    <img src={Lamp} alt="lamp" className="lamp" />
  </main>
);

export default Error;
