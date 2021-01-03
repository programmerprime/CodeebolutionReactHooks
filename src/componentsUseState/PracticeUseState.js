import React, { useState } from "react";

const PracticeUseState = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={incrementFive}>Increment by 5</button>
    </div>
  );
};

export default PracticeUseState;
