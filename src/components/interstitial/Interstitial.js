import React from "react";
import HappyHappyGame from "../../assets/sounds/Happy Happy Game Show.mp3";
import { click } from "../../utils/click";
import "./Interstitial.css";
import hand from "../../assets/images/hand.svg";
import qBoxes from "../../assets/images/q-boxes.svg";
import Ptsb from "../../assets/images/wyt-ptsb.png";
import Csi from "../../assets/images/clay-csi-logo.png";

const Interstitial = (props) => {
  React.useEffect(() => {
    setTimeout(() => {
      click.play();
      props.history.push("/survey");
    }, 8000);
  // eslint-disable-next-line
  }, []);
  const ref = React.createRef();
  return (
    <main className="interstitial-container">
      <section className="interstitial-text">
        <span>The quiz will begin in a moment...</span>
        <span>click the answer that best fits your family!</span>
      </section>
      <div className="hand-and-boxes">
        <img src={hand} alt="hand" className="hand" />
        <img src={qBoxes} alt="boxes" className="boxes" />
      </div>
      <img src={Ptsb} alt="" className="ptsb-logo" />
      <img src={Csi} alt="" className="csi-logo" />
      <audio ref={ref} src={HappyHappyGame} autoPlay loop={true} />
    </main>
  );
};

export default Interstitial;
