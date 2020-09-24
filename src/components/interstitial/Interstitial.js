import React from "react";

const Interstitial = (props) => {
  React.useEffect(() => {
    setTimeout(() => {
      props.history.push("/survey");
    }, 3000);
    // eslint-disable-next-line
  }, []);
  return (
    <main>
      <p>The quiz will begin any moment...</p>
      <p>Choose the answers that best fit your family!</p>
    </main>
  );
};

export default Interstitial;
