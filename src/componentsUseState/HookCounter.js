import React, { useState } from "react";

const HookCounter = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>Increment {number}</button>
    </div>
  );
};

export default HookCounter;
