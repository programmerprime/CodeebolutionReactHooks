import React, { useState } from "react";
import PracticeComponent from "./PracticeComponent";

const ParentPractice = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {" "}
        {toggle ? "Hide component" : "Show component"}{" "}
      </button>
      {toggle ? <PracticeComponent /> : null}
    </div>
  );
};

export default ParentPractice;
