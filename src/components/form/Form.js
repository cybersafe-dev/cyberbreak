import React from "react";

const Form = (props) => {
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/.netlify/functions/createUser`, {
      method: "POST",
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem("uid", data);
      })
      .then(() => props.history.push("/survey"))
      .catch(console.error);
  };

  return (
    <main>
      <h1>Unlock the quiz!</h1>
      <p>
        Enter your email to subscribe to our newsletter, and unlock a fun family
        quiz to see where you’re at right now when it comes to being smart and
        safe online. Good luck!
      </p>
      <form>
        <label htmlFor="name">
          Please enter your name
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formValues.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          Please enter your email address
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange}
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
