import React from "react";

const CountTwo = ({ text, count }) => {
  console.log("rendering count - ", text);
  return (
    <div>
      <h2>
        {" "}
        {text} - {count}{" "}
      </h2>
    </div>
  );
};

export default React.memo(CountTwo);
