import React, { useState } from "react";
import useCounter from "../Hooks/useCounter";

const CounterTwo = () => {
  const [count, increment, decrement, reset] = useCounter(10, 20);
  return (
    <div>
      <h2>Counter 2 = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterTwo;
