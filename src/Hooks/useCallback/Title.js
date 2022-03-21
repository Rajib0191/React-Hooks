import React, { memo } from "react";

const Title = () => {
  console.log("Title---Rendered");
  return (
    <div>
      <h1>useCallback</h1>
    </div>
  );
};

export default memo(Title);
