import { useState } from "react";

const useCounter = (initialCounter, value) => {
  const [count, setCount] = useState(initialCounter);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + value);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - value);
  };
  const handleReset = () => {
    setCount(initialCounter);
  };
  return [count, handleIncrement, handleDecrement, handleReset];
};

export default useCounter;
