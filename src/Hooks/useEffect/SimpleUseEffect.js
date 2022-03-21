import React, { useEffect, useState } from "react";

const SimpleUseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect CAll");
    document.title = `you Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
};

export default SimpleUseEffect;
