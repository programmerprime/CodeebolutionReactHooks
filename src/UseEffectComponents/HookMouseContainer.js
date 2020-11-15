import React, { useState } from "react";
import HookMouse from "./HookMouse";

const HookMouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>
        {display ? "Hide Componenet" : "Show Component"}
      </button>

      {display && <HookMouse />}
    </div>
  );
};

export default HookMouseContainer;
