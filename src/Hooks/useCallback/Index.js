import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const Index = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(10000);

  const IncrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const IncrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div style={{ textAlign: "center" }}>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={IncrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={IncrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default Index;
