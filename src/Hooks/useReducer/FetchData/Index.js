import React, { useEffect, useReducer } from "react";
import FetchReducer, { initialState } from "./FetchReducer";
import axios from "axios";

const Index = () => {
  const [state, dispatch] = useReducer(FetchReducer, initialState);
  //   console.log(state);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(function (response) {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch(function (error) {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading.........." : <p>{state.post.title}</p>}
      {state.error ? state.error : null}
    </div>
  );
};

export default Index;
