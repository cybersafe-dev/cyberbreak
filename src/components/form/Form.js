import React from "react";

const Form = (props) => {
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
  });
  const [error, setError] = React.useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formOk = await validateForm();
    if (formOk) {
      await fetch(`/.netlify/functions/createUser`, {
        method: "POST",
        body: JSON.stringify(formValues),
      })
        .then((res) => res.json())
        .then((data) => {
          sessionStorage.setItem("uid", data);
        })
        .then(() => props.history.push("/interstitial"))
        .catch(console.error);
    } else {
      return;
    }
  };

  const validateForm = () => {
    const { name, email } = formValues;
    if (!name || !email) {
      setError("Please fill in both form fields");
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
            placeholder="enter name"
            value={formValues.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          Please enter your email address
          <input
            type="email"
            id="email"
            placeholder="enter email"
            value={formValues.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleFormSubmit}>
          Unlock!
        </button>
        {error && <p>{error}</p>}
      </form>
      <a
        href="https://cybersafeireland.org/privacy-policy-and-data-protection"
        target="_blank"
        rel="noopener noreferrer"
      >
        privacy policy
      </a>
    </main>
  );
};

export default Form;
