import React from "react";
import { scoreBlurbs } from "../../utils/scoreBlurbs";
import blueSka from "../../assets/sounds/Blue Ska.mp3";
import { click } from "../../utils/click";
import Trophy from "../../assets/images/confetti-cup.svg"
import Confetti from "../../assets/images/confetti.svg"
import "./Thankyou.css"


const Thankyou = () => {
  const scores = JSON.parse(sessionStorage.getItem("scores"));
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const ref = React.createRef();


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

  React.useEffect(() => {
    if (scores) {
      fetch(`/.netlify/functions/addScores`, {
        method: "POST",
        body: JSON.stringify({ scores: scores }),
      });
      // debug logs
      // .then((res) => res.json())
      // .then((data) => {
      //   console.log(data);
      // })
      // .catch(console.error);
    }
    // eslint-disable-next-line
  }, []);

  return (

    <main className="score-container">
      <section className="body">
              <section className="score-content">
                  <h1 className="score-title">Score Card</h1>
                  <p className="blurb">{scoreBlurb}</p>
                  <p className="blurb">
                    Hi {sessionStorage.getItem("name")}, thanks for taking part in Cyber
                    Break!
                  </p>
                  <p className="blurb">
                    If you would like to subscribe to our email list please enter your email
                    address and click 'Subscribe' below.
                  </p>
              </section>
                <section className="trophy-container">
                  <h2 className="score"> {finalScorePercent(finalScore)}%</h2>

                  <img src={Trophy} alt=""/>
                </section>
            
              </section>
            <form>
              <label htmlFor="email">
                Please enter your email address
              </label>
              <input
                  type="email"
                  id="email"
                  placeholder="enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email"
              />
                {message && <p>{message}</p>}
                {error && <p>{error}</p>}
                <button type="submit" onClick={handleEmailSubmit} className="subscribe">
                  Subscribe
                </button>
            </form>
              <a className="donate" href="https://cybersafeireland.org" onClick={() => click.play()}>Donate to CyberSafeIreland</a>
              <a
                className="privacy"
                href="https://cybersafeireland.org/privacy-policy-and-data-protection"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => click.play()}
              >
                Privacy Policy
              </a>
                <audio ref={ref} src={blueSka} autoPlay />
    </main>

  );
};

export default Thankyou;
