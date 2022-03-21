import React, { useState } from "react";

const UseStateWithArray = () => {
  const [items, setItems] = useState([]);
  const AddValue = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div className="use_state_with_array">
      <button className="add_number_in_state" onClick={AddValue}>
        Enter Value
      </button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseStateWithArray;
