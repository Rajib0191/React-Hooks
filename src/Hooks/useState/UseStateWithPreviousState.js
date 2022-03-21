import React, { useState } from "react";

const UseStateWithPreviousState = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const incrementFive = () => {
    for (let i = 0; i < 5000; i++) {
      setCount((preveState) => preveState + 1);
    }
  };
  return (
    <div className="use_state_with_previous_state">
      <h4>{count}</h4>
      <button
        className="counter_button"
        onClick={() => setCount((preveState) => preveState + 1)}
      >
        Increase
      </button>
      <button
        className="counter_button"
        onClick={() => setCount((preveState) => preveState - 1)}
      >
        Decrease
      </button>
      <button className="counter_button" onClick={() => setCount(initialState)}>
        Reset
      </button>
      <button
        //   onClick={() => setCount((preveState) => preveState + 5)}
        onClick={incrementFive}
      >
        Increase by 5
      </button>
    </div>
  );
};

export default UseStateWithPreviousState;
