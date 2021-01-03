import React, { useState } from "react";

const PracticeComponent = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setName({ ...name, firstname: e.target.value })}
      />
      <input
        type="text"
        value={name.lastname}
        onChange={(e) => setName({ ...name, lastname: e.target.value })}
      />
      <h1>First Name: {name.firstname} </h1>
      <h1>Last Name: {name.lastname} </h1>
      <h3> {JSON.stringify(name)} </h3>
    </div>
  );
};

export default PracticeComponent;
