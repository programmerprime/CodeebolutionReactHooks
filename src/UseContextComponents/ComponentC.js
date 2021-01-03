import React, { useContext } from "react";
import { LoveContext } from "../App";
import ComponentE from "./ComponentE";

function ComponentC() {
  const love = useContext(LoveContext);

  console.log(love);
  console.log(typeof love);
  return (
    <>
      <h3>{love}</h3>
      <ComponentE />
    </>
  );
}

export default ComponentC;
