import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      id: "_" + Math.random().toString(36).substr(2, 9),
      name: name,
      email: email,
    });
    setName("");
    setEmail("");
  };

  return (
    <div style={{ margin: "10px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            ref={inputRef}
            type="text"
            value={name}
            placeholder="Enter Your Name"
            style={{ padding: "5px" }}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            placeholder="Enter Your Email"
            style={{ padding: "5px" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" style={{ padding: "5px", marginTop: "10px" }}>
          Submit
        </button>
      </form>
      <div style={{}}>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default UseRef;
