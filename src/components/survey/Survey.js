import React from "react";
import { surveyContent } from "../../utils/surveyContent";
import { click } from "../../utils/click";
import { quizMusic } from "../../utils/music";
import { surveyBackgroundColor } from "../../utils/surveyBackground";
import Cyclist from "../../assets/images/cyclist-svg.svg";
import "./Survey.css";

const Survey = (props) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(1);
  const [scores, setScores] = React.useState([]);
  const [currentMusic, setCurrentMusic] = React.useState(null);
  const [currentBg, setCurrentBg] = React.useState(null);
  const ref = React.createRef();

  React.useEffect(() => {
    sessionStorage.setItem("scores", JSON.stringify(scores));
  }, [scores]);

  React.useEffect(() => {
    setCurrentMusic(() => quizMusic(currentQuestion));
    setCurrentBg(() => surveyBackgroundColor(currentQuestion));
    if (currentQuestion > 10) {
      const finalScores = JSON.parse(sessionStorage.getItem("scores"));
      const postFinalScores = async (array) => {
        await fetch(`/.netlify/functions/addScores`, {
          method: "POST",
          body: JSON.stringify({ scores: array }),
        })
          // debug logs
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            props.history.push("/thankyou");
          })
          .catch(console.error);
      };
      postFinalScores(finalScores);
    }

    // eslint-disable-next-line
  }, [currentQuestion]);

  const goToNextQuestion = (e) => {
    click.play();
    const { value } = e.target;
    setScores([...scores, parseInt(value)]);
    setCurrentQuestion(() => currentQuestion + 1);
  };

  if (currentQuestion === 1) {
    sessionStorage.setItem("scores", []);
  }

  if (!surveyContent[currentQuestion]) {
    return <h1>Loading quiz questions...</h1>;
  }

  return (
    <main className="question-container" style={{ backgroundColor: currentBg }}>
      <h1 className="hidden">Quiz</h1>
      <h2 className="statement">
        {currentQuestion}. {surveyContent[currentQuestion].statement}
      </h2>
      <section className="responses">
        {surveyContent[currentQuestion].a1 ? (
          <button
            className="response"
            onClick={goToNextQuestion}
            value={surveyContent[currentQuestion].a1.points}
          >
            a. {surveyContent[currentQuestion].a1.answer}
          </button>
        ) : null}
        {surveyContent[currentQuestion].a2 ? (
          <button
            className="response"
            onClick={goToNextQuestion}
            value={surveyContent[currentQuestion].a2.points}
          >
            b. {surveyContent[currentQuestion].a2.answer}
          </button>
        ) : null}
        {surveyContent[currentQuestion].a3 ? (
          <button
            className="response"
            onClick={goToNextQuestion}
            value={surveyContent[currentQuestion].a3.points}
          >
            c. {surveyContent[currentQuestion].a3.answer}
          </button>
        ) : null}
        {surveyContent[currentQuestion].a4 ? (
          <button
            className="response"
            onClick={goToNextQuestion}
            value={surveyContent[currentQuestion].a4.points}
          >
            d. {surveyContent[currentQuestion].a4.answer}
          </button>
        ) : null}
      </section>
      <p className="fraction">{currentQuestion}/10</p>
      <img src={Cyclist} alt="cycling through trees" className="cyclist-svg" />
      <audio ref={ref} src={currentMusic} autoPlay loop={true} />
    </main>
  );
};

export default Survey;
