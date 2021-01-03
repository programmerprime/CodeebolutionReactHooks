import React, { useState } from "react";
import useInput from "../Hooks/useInput";

const UserInput = () => {
  const [firstName, bindFirstName, resetf] = useInput("");
  const [lastName, bindLastName, resetl] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetf();
    resetl();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input {...bindFirstName} type="text" />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" {...bindLastName} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserInput;
