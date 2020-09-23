import React from "react";
import { scoreBlurbs } from "../../utils/scoreBlurbs";

const Thankyou = () => {
  const scores = JSON.parse(sessionStorage.getItem("scores"));

  let finalScore = scores.reduce((acc, num) => {
    return acc + num;
  });

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

  React.useEffect(() => {
    if (finalScore || finalScore === 0) {
      const uid = sessionStorage.getItem("uid");
      fetch(`/.netlify/functions/addScoreToUser`, {
        method: "POST",
        body: JSON.stringify({ uid: uid, finalScore: finalScore }),
      })
        // debug logs
        // .then(res => res.json())
        // .then((data) => {
        //   console.log(data)
        //  })
        // .catch(console.error);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <h1>Score Card</h1>
      <h2>Your Score: {finalScore}</h2>
      <p>{scoreBlurb}</p>
      <p>
        Thank you for taking part in Cyber Break! You can close this window now.
      </p>
      <a href="https://cybersafeireland.org">CyberSafeIreland</a>
    </main>
  );
};

export default Thankyou;
