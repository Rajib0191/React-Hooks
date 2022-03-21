import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const name = "Rajib";
  return (
    <UserContext.Provider value={{ name }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
