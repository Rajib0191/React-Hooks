import React, { useState } from "react";
const SimpleUseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="simple_use_state">
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};
export default SimpleUseState;
