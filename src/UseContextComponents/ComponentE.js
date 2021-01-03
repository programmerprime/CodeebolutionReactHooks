import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../App";
import ComponentF from "./ComponentF";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  const { name, age, department } = user;

  console.log("user = ", user, " and channel = ", channel);

  return (
    <div>
      <h1>
        User is {name}, age = {age} and department = {department}
      </h1>

      {channel.map((number, index) => (
        <h1 key={index}>{number}</h1>
      ))}

      <ComponentF />
    </div>
  );
}

export default ComponentE;
