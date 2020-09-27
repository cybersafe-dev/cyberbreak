import React from "react";
import { scoreBlurbs } from "../../utils/scoreBlurbs";
import blueSka from "../../assets/sounds/Blue Ska.mp3";
import { click } from "../../utils/click";

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
    <main>
      <h1>Score Card</h1>
      <h2>{finalScorePercent(finalScore)}%</h2>
      <p>{scoreBlurb}</p>
      <p>
        Hi {sessionStorage.getItem("name")}, thanks for taking part in Cyber
        Break!
      </p>
      <p>
        If you would like to subscribe to our email list please enter your email
        address and click 'Subscribe' below.
      </p>
      <form>
        <label htmlFor="email">
          Please enter your email address
          <input
            type="email"
            id="email"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleEmailSubmit}>
          Subscribe
        </button>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </form>
      <a href="https://cybersafeireland.org" onClick={() => click.play()}>Donate to CyberSafeIreland</a>
      <a
        href="https://cybersafeireland.org/privacy-policy-and-data-protection"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => click.play()}
      >
        privacy policy
      </a>
      <audio ref={ref} src={blueSka} autoPlay loop="true" />
    </main>
  );
};

export default Thankyou;
