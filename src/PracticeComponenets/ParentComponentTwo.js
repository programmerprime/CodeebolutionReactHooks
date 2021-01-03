import React, { useState } from "react";
import CountTwo from "./CountTwo";
import TitleTwo from "./TitleTwo";
import ButtonTwo from "./ButtonTwo";

const ParentComponentTwo = () => {
  const [age, setAge] = useState(100);
  const [salary, setSalary] = useState(100000);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const incrementSalary = () => {
    setSalary(salary + 10);
  };

  return (
    <div>
      <TitleTwo />
      <CountTwo text="age" count={age} />
      <ButtonTwo handleClick={incrementAge}>Increment Age</ButtonTwo>
      <CountTwo text="salary" count={salary} />
      <ButtonTwo handleClick={incrementSalary}>Increment Salary</ButtonTwo>
    </div>
  );
};

export default ParentComponentTwo;
