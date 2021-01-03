import React, { useEffect, useState } from "react";

const PracticeUseEffect = () => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Prime");

  useEffect(() => {
    console.log("useEffect called");
    console.log(name);
  }, [name, count]);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increase
      </button>
      <h1>name = {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default PracticeUseEffect;
<h2>hello</h2>;
