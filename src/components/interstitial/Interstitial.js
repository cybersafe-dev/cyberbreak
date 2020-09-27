import React from "react";
import HappyHappyGame from "../../assets/sounds/Happy Happy Game Show.mp3";
import { click } from "../../utils/click";
import "./Interstitial.css";
import hand from "../../assets/images/hand.svg";
import qBoxes from "../../assets/images/q-boxes.svg";

const Interstitial = (props) => {
  React.useEffect(() => {
    setTimeout(() => {
      click.play();
      props.history.push("/survey");
    }, 5000);
  // eslint-disable-next-line
  }, []);
  const ref = React.createRef();
  return (
    <main className="interstitial-container">
      <section className="interstitial-text">
        <p>The quiz will begin any moment...</p>
        <p>Choose the answers that best fit your family!</p>
      </section>
      <div className="hand-and-boxes">
        <img src={hand} alt="hand" className="hand" />
        <img src={qBoxes} alt="boxes" className="boxes" />
      </div>
      <audio ref={ref} src={HappyHappyGame} autoPlay loop={true} />
    </main>
  );
};

export default Interstitial;
