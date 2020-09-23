import React from "react";

const Interstitial = (props) => {
  React.useEffect(() => {
    setTimeout(() => {
      props.history.push("/survey");
    }, 3000);
    // eslint-disable-next-line
  }, []);
  return <p>Choose the answer that best fits your family!</p>;
};

export default Interstitial;
