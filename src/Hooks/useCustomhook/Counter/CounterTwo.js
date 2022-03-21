import React, { useState } from "react";
import useCounter from "./useCounter";

const CounterTwo = () => {
  const [count, handleIncrement, handleDecrement, handleReset] = useCounter(
    10,
    10
  );

  return (
    <div>
      <span>Counr - {count}</span>
      <div>
        <button
          style={{ margin: "5px", padding: "5px" }}
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          style={{ margin: "5px", padding: "5px" }}
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button style={{ margin: "5px", padding: "5px" }} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterTwo;
