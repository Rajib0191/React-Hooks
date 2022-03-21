import { useEffect } from "react";

const UseCustomHook = (count) => {
  useEffect(() => {
    document.title = `Count - ${count}`;
  }, [count]);
};

export default UseCustomHook;
