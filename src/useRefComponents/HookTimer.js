import React, { useState, useEffect, useRef } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);

  // although useRef is used to hold a reference to a DOM node using the 'ref' attribute, it can also be used to store any mutable value, the value will persist through all the next re-renders, and will not cause any additional re-render when the mutable value changes or the component re-renders due to the changes of other state variables
  let intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Hook Timer - {timer} </h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop hook timer
      </button>
    </div>
  );
};

export default HookTimer;
