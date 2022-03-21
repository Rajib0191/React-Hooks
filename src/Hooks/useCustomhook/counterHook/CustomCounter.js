import React, { useEffect, useState } from "react";
import UseCustomHook from "./UseCustomHook";

const CustomCounter = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  UseCustomHook(count);
  return (
    <div>
      <button onClick={handleCount}>Count: {count}</button>
    </div>
  );
};

export default CustomCounter;
