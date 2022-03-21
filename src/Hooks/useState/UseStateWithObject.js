import React, { useState } from "react";

const UseStateWithObject = () => {
  const [name, setName] = useState({ FirstName: "", LastName: "" });
  return (
    <div className="use_state_with_obj">
      <input
        className="first_name_input"
        type="text"
        placeholder="Enter First Name"
        onChange={(e) => setName({ ...name, FirstName: e.target.value })}
      />
      <input
        className="last_name_input"
        type="text"
        placeholder="Enter LastName"
        onChange={(e) => setName({ ...name, LastName: e.target.value })}
      />
      <p>First Name: {name.FirstName}</p>
      <p>Last Name: {name.LastName}</p>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
};

export default UseStateWithObject;
