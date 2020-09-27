import React from "react";
import HappyHappyGame from "../../assets/sounds/Happy Happy Game Show.mp3";
import { click } from "../../utils/click";

const Interstitial = (props) => {
  React.useEffect(() => {
    setTimeout(() => {
      click.play();
      props.history.push("/survey");
    }, 3000);
    // eslint-disable-next-line
  }, []);
  const ref = React.createRef();
  return (
    <main>
      <p>The quiz will begin any moment...</p>
      <p>Choose the answers that best fit your family!</p>
      <audio ref={ref} src={HappyHappyGame} autoPlay loop="true" />
    </main>
  );
};

export default Interstitial;
