import React from "react";
import { scoreBlurbs } from "../../utils/scoreBlurbs";
import blueSka from "../../assets/sounds/Blue Ska.mp3";
import { click } from "../../utils/click";
import Trophy from "../../assets/images/confetti-cup.svg";
import MusicModal from "../musicModal/MusicModal";
import Note from "../../assets/images/note.svg";
import Lock from "../../assets/images/white-lock.svg";
import Ptsb from "../../assets/images/wyt-ptsb.png";
import Csi from "../../assets/images/csi-logo.png";
import "./Thankyou.css";

const Thankyou = (props) => {
  const scores = JSON.parse(sessionStorage.getItem("scores"));
  const [musicModalVisible, toggleMusicModalVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const ref = React.createRef();

  if (!scores) {
    props.history.push("/");
  }

  let finalScore = scores.reduce((acc, num) => {
    return acc + num;
  });

  let finalScorePercent = (finalScore) => {
    return Math.round((finalScore * 100) / 23);
  };

  let scoreBlurb = "";
  switch (true) {
    case finalScore >= 20:
      scoreBlurb = scoreBlurbs.first;
      break;
    case finalScore >= 15:
      scoreBlurb = scoreBlurbs.second;
      break;
    case finalScore >= 11:
      scoreBlurb = scoreBlurbs.third;
      break;
    default:
      scoreBlurb = scoreBlurbs.fourth;
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const formOk = await validateEmail();
    if (formOk) {
      await fetch(`/.netlify/functions/createUser`, {
        method: "POST",
        body: JSON.stringify({
          name: sessionStorage.getItem("name"),
          email: email,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          setMessage(
            "Thanks for subscribing...We're glad you want to keep on top of your online safety!"
          );
        })
        .catch(console.error);
    } else {
      return;
    }
  };

  const validateEmail = () => {
    if (!email) {
      setError("Please fill in an email address");
      return false;
    }
    const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailGood = emailValidator.test(String(email).toLowerCase());
    if (!emailGood) {
      setError("Sorry, your email address was not formatted properly");
      return false;
    }
    return true;
  };

  return (
    <main className="score-container">
      {musicModalVisible && (
        <MusicModal
          musicModalVisible={musicModalVisible}
          toggleMusicModalVisible={toggleMusicModalVisible}
        />
      )}
      <section className="results">
        <section className="score-content">
          <h1 className="score-title">Score Card</h1>
          <p className="blurb">
            Hi {sessionStorage.getItem("name")}, thanks for taking part in Cyber
            Break!
          </p>
          <p className="blurb">{scoreBlurb}</p>
        </section>
        <section className="trophy-container">
          <h2 className="score"> {finalScorePercent(finalScore)}%</h2>
          <img src={Trophy} alt="trophy" className="trophy" />
        </section>
      </section>
      <form className="email-signup">
        <div>
          <p className="blurb">
            If you would like to subscribe to our newsletter please enter your
            email address and click 'Subscribe' below.
          </p>
          <label htmlFor="email">Please enter your email address</label>
          <input
            type="email"
            id="email"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email"
          />
          {message && <p className="msg">{message}</p>}
          {error && <p className="error-msg">{error}</p>}
        </div>
        <section className="options">
          <div className="logos-thankyou">
            <img src={Ptsb} alt="" />
            <img src={Csi} alt="" />
          </div>
          <button
            type="submit"
            onClick={handleEmailSubmit}
            className="subscribe"
          >
            Subscribe
          </button>

          <section className="link-btns">
            <div className="link-btn">
              <a
                href="https://cybersafeireland.org/privacy-policy-and-data-protection"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  onClick={() => click.play()}
                  type="button"
                  className="music-btn"
                >
                  <img src={Lock} alt="See privacy policy" className="note" />
                </button>
              </a>
              <p className="btn-link">Privacy Policy</p>
            </div>
            <div className="link-btn">
              <button
                type="button"
                className="music-btn"
                onClick={() => {
                  toggleMusicModalVisible(!musicModalVisible);
                  click.play();
                }}
              >
                <img
                  src={Note}
                  alt="See music acknowledgements"
                  className="note"
                />
              </button>
              <p className="btn-link">Music</p>
            </div>
          </section>
          <a
            href="https://cybersafeireland.org/support-us/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="subscribe"
              onClick={() => click.play()}
            >
              Donate
            </button>
          </a>
        </section>
      </form>

      <audio ref={ref} src={blueSka} autoPlay loop={true} />
    </main>
  );
};

export default Thankyou;
