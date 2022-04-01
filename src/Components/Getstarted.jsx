import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
function Getstarted() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}
    >
      <label for="inp1" style={{ fontSize: "25px" }}>
        Username
      </label>
      <input
        type="text"
        id="inp1"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <label for="inp2" style={{ fontSize: "25px" }}>
        Password
      </label>
      <input
        type="password"
        id="inp2"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        id="btn1"
        onClick={() => {
          let data = [];
          if (username === "") {
            data.push("Username is required");
          }
          if (password.length < 5) {
            data.push("Password Incorrect");
          } else {
            navigate("/products");
          }
          setError(data);
        }}
      >
        Submit
      </button>
      {error.length > 0 ? (
        <ol>
          {error.map((err) => {
            return <li>{err}</li>;
            err = "";
          })}
        </ol>
      ) : null}
      <Link to="/">
        <button id="btn2">Back</button>
      </Link>
    </div>
  );
}

export default Getstarted;
