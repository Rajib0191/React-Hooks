import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const handleCounterOne = () => {
    setCounterOne(counterOne + 1);
  };
  const handleCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <div>
        <button onClick={handleCounterOne}>Click - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={handleCounterTwo}>Click - {counterTwo}</button>
      </div>
    </div>
  );
};

export default UseMemo;
