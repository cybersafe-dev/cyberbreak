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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // post form data to airtable
    props.history.push("/");
  };

  return (
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
        Lets go!
      </button>
    </form>
  );
};

export default Form;
