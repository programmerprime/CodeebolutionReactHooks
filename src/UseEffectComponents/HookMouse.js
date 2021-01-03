import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      // i think this returned call back function works as componentWillUnmount(), that means when the component is removed from the UI
      console.log("got out from useEffect");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <h2>
        Coordinates X - {x} Y - {y}
      </h2>
    </div>
  );
};

export default HookMouse;
