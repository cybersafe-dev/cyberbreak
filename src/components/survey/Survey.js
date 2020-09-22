import React from "react";
import { surveyContent } from "../../utils/surveyContent";

const Survey = (props) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(1);
  const [scores, setScores] = React.useState([]);

  React.useEffect(() => {
    sessionStorage.setItem("scores", JSON.stringify(scores));
  }, [scores]);

  const goToNextQuestion = (e) => {
    const { value } = e.target;
    setScores([...scores, parseInt(value)]);
    setCurrentQuestion(() => currentQuestion + 1);
  };

  if (currentQuestion > 10) {
    props.history.push("/thankyou");
  } else if (currentQuestion === 1) {
    sessionStorage.setItem("scores", []);
  }

  if (!surveyContent[currentQuestion]) {
    return <h1>Loading quiz questions...</h1>;
  }

  return (
    <main>
      <h1>Survey</h1>
      <h2>
        {currentQuestion} {surveyContent[currentQuestion].statement}
      </h2>
      {surveyContent[currentQuestion].a1 ? (
        <button
          onClick={goToNextQuestion}
          value={surveyContent[currentQuestion].a1.points}
        >
          a. {surveyContent[currentQuestion].a1.answer}
        </button>
      ) : null}
      {surveyContent[currentQuestion].a2 ? (
        <button
          onClick={goToNextQuestion}
          value={surveyContent[currentQuestion].a2.points}
        >
          b. {surveyContent[currentQuestion].a2.answer}
        </button>
      ) : null}
      {surveyContent[currentQuestion].a3 ? (
        <button
          onClick={goToNextQuestion}
          value={surveyContent[currentQuestion].a3.points}
        >
          c. {surveyContent[currentQuestion].a3.answer}
        </button>
      ) : null}
      {surveyContent[currentQuestion].a4 ? (
        <button
          onClick={goToNextQuestion}
          value={surveyContent[currentQuestion].a4.points}
        >
          d. {surveyContent[currentQuestion].a4.answer}
        </button>
      ) : null}
    </main>
  );
};

export default Survey;
