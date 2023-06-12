import React from "react";
import { useState } from "react";
import axios from "axios";

function LogInForm(params) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const data = {
        username: loginUsername,
        password: loginPassword,
      };

      const response = await axios.post(
        "http://localhost:9000/users/login",
        data,
        config
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={login}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
}

export default LogInForm;
