import React from "react";
import UserProvider from "./Context";
import User from "./User";

const Index = () => {
  return (
    <div>
      <UserProvider>
        <User />
      </UserProvider>
    </div>
  );
};

export default Index;
