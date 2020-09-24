import React from "react";


const Form = (props) => {
  const [name, setName] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("name", name);
    props.history.push("/interstitial")
  };

  return (
    <main>
      <h1>Unlock the quiz!</h1>
      <p>
        Enter a team name to unlock a fun family quiz to see where you’re at
        right now when it comes to being smart and safe online. Good luck!
      </p>
      <form>
        <label htmlFor="name">
          Please enter your name
          <input
            type="text"
            id="name"
            placeholder="team name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleFormSubmit}>
          Unlock!
        </button>
      </form>
    </main>
  );
};

export default Form;
