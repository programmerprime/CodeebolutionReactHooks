import React, { useState } from "react";

const UseStateWithObjects = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>First name : {name.firstName}</h2>
      <h2>Last Name : {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
};

export default UseStateWithObjects;
