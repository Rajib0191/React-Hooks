import React, { useContext } from "react";
import { UserContext } from "./Context";

const User = () => {
  const { name } = useContext(UserContext);
  return (
    <div>
      <h1>
        Hello <span>{name}</span>
      </h1>
    </div>
  );
};

export default User;
