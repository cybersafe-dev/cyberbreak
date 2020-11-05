import React from "react";
import { scoreBlurbs } from "../../utils/scoreBlurbs";
import blueSka from "../../assets/sounds/Blue Ska.mp3";
import { click } from "../../utils/click";
import Trophy from "../../assets/images/confetti-cup.svg";
import Note from "../../assets/images/note.svg";
import Lock from "../../assets/images/white-lock.svg";
import Arrow from "../../assets/images/arrow.png";
import Csi from "../../assets/images/green-csi-logo.png";
import "./Thankyou.css";

const Thankyou = (props) => {
  const scores = JSON.parse(sessionStorage.getItem("scores"));
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const ref = React.createRef();

  React.useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

  if (!scores) {
    props.history.push("/");
    return null;
  }

  let finalScore = scores.reduce((acc, num) => {
    return acc + num;
  });

  let finalScorePercent = (finalScore) => {
    return Math.round((finalScore * 100) / 23);
  };

  let scoreBlurb = "";
  let scoreBlurbTwo = "";
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
      scoreBlurbTwo = scoreBlurbs.fourthTwo;
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
      <div className="logos-thankyou">
        <img src={Csi} alt="" className="c-logo" />
      </div>
      <form className="email-signup">
        <div className="three-columns">
          <div className="left-column">
            <img src={Arrow} alt="arrow" className="arrow" />
          </div>

          <div className="center-column">
            <h1 className="score-title">Score Card</h1>
            <p className="score-blurb">{scoreBlurb}</p>
            {scoreBlurbTwo ? (
              <p className="score-blurb">{scoreBlurbTwo}</p>
            ) : null}
            <p className="blurb">
              Thanks for taking part in the CyberSafe Family Quiz,{" "}
              {sessionStorage.getItem("name")}!
            </p>

            <p className="blurb">
              Please subscribe to our newsletter* by entering your email address
              and clicking subscribe below.
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
            <p className="blurb1">
              *These are delivered quarterly and are packed full of info about
              the latest online trends and resources for parents. In line with
              GDPR, we will only use your email address for this purpose.
            </p>
          </div>

          <div className="right-column">
            <section className="trophy-container">
              <h2 className="score"> {finalScorePercent(finalScore)}%</h2>
              <img src={Trophy} alt="trophy" className="trophy" />
            </section>
          </div>
        </div>

        <section className="options">
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
                  click.play();
                  props.history.push("/music");
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
            href="https://www.cybersafeireland.org/support-us/"
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
