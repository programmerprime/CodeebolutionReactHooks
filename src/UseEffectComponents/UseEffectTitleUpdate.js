import React, { useEffect, useState } from "react";

const UseEffectCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // the callback function inside useEffect is called on every render
  // but if the dependency list is empty, it runs only on first render
  // or if there is any variable inside the dependency list, the function will execute each time the variable changes

  useEffect(() => {
    console.log("updated document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Your name is : {name}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default UseEffectCounter;
