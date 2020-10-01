import React from "react";
import "./Form.css";
import Lockchain from "../../assets/images/lockchain.svg";
import Ptsb from "../../assets/images/wyt-ptsb.png";
import Csi from "../../assets/images/ora-csi-logo.png";
import HappyHappyGame from "../../assets/sounds/Happy Happy Game Show.mp3";
import { click } from "../../utils/click";

const Form = (props) => {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const ref = React.createRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please enter a team name to unlock the quiz!");
      return;
    } else {
      click.play();
      sessionStorage.setItem("name", name);
      props.history.push("/interstitial");
    }
  };

  return (
    <main className="page-container">
      <h1 className="hidden">Unlock the quiz!</h1>
      <section className="name-entry">
        <p className="explainer">
          Enter a team name to unlock a fun family quiz to see where you’re at
          right now when it comes to being smart and safe online. Good luck!
        </p>
        <form>
          <label htmlFor="name">Please enter your name</label>
          <input
            type="text"
            id="name"
            placeholder="team name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && <p className="error-msg">{error}</p>}
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="unlock-btn"
          >
            Unlock!
          </button>
        </form>
      </section>
      <img src={Lockchain} className="lockchain" alt="Padlock" />
      <img src={Ptsb} alt="" className="ptsb-logo" />
      <img src={Csi} alt="" className="csi-logo" />
      <audio ref={ref} src={HappyHappyGame} autoPlay loop={true} />
    </main>
  );
};

export default Form;
