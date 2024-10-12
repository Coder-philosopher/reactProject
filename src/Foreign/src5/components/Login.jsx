import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext.js";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="bg-blue-600">
      <h2>Login</h2>
      <input
        type="text"
        style={{ outline: "none" }}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        style={{ outline: "none" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit} style={{ outline: "none" }}>
        Submit
      </button>
    </div>
  );
}

export default Login;
