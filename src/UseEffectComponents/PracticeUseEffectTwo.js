import React, { useState } from "react";
import PracticeUseEffect from "./PracticeUseEffect";

const PracticeUseEffectTwo = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>
        {display ? "Hide component" : "Show component"}
      </button>

      {display && <PracticeUseEffect />}
    </div>
  );
};

export default PracticeUseEffectTwo;
