import React, { useReducer } from "react";
import { CounterReducer, Reducerstate } from "./CounterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducer, Reducerstate);
  console.log(state);
  return (
    <div className="counter_reducer_section">
      <div>
        <h4>Count Value: {state.initialState}</h4>
      </div>
      <button
        className="reducer_button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increase
      </button>
      <button
        className="reducer_button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrease
      </button>
      <button
        className="reducer_button"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
      <button
        className="reducer_button"
        onClick={() =>
          dispatch({ type: "INCREMENT_BY_5", payload: { value: 5 } })
        }
      >
        Increase By 5
      </button>
    </div>
  );
};

export default Counter;
