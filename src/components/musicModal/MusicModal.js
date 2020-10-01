import React from "react";
import "./MusicModal.css";
import xIcon from "../../assets/images/x-icon.svg";
import { click } from "../../utils/click";
import blueSka from "../../assets/sounds/Blue Ska.mp3";

const MusicModal = (props) => {
  const ref = React.createRef();

  return (
    <main
      className="modal-container"
      onClick={() => {
        click.play();
        props.history.push("/thankyou");
      }}
    >
      <img
        src={xIcon}
        alt="Close Music Acknowledgements"
        onClick={() => {
          click.play();
          props.history.push("/thankyou");
        }}
        className="x-icon"
      />
      <section className="modal-text">
        <h1 className="modal-header">Music</h1>
        <p>
          All music by Kevin MacLeod (incompetech.com) and licensed under
          Creative Commons.
        </p>
        <p>
          "Happy Happy Game Show" Kevin MacLeod (incompetech.com) Licensed under
          Creative Commons: By Attribution 4.0 License
          http://creativecommons.org/licenses/by/4.0/
        </p>
        <p>
          "Onion Capers" Kevin MacLeod (incompetech.com) Licensed under Creative
          Commons: By Attribution 4.0 License
          http://creativecommons.org/licenses/by/4.0/
        </p>
        <p>
          "Robobozo" Kevin MacLeod (incompetech.com) Licensed under Creative
          Commons: By Attribution 4.0 License
          http://creativecommons.org/licenses/by/4.0/
        </p>
        <p>
          "Zazie" Kevin MacLeod (incompetech.com) Licensed under Creative
          Commons: By Attribution 4.0 License
          http://creativecommons.org/licenses/by/4.0/
        </p>
        <p>
          "Kings of Tara" Kevin MacLeod (incompetech.com) Licensed under
          Creative Commons: By Attribution 4.0 License
          http://creativecommons.org/licenses/by/4.0/
        </p>
        <p>
          "Blue Ska" Kevin MacLeod (incompetech.com) Licensed under Creative
          Commons: By Attribution 4.0 License
          http://creativecommons.org/licenses/by/4.0/
        </p>
      </section>
      <audio ref={ref} src={blueSka} autoPlay loop={true} />
    </main>
  );
};

export default MusicModal;
