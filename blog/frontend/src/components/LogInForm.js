import React from "react";
import { useState } from "react";

function LogInForm(params) {
  const [loginName, setLoginName] = useState("");
  const [loginUserame, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <>
      <form>
        <label name="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setLoginName(e.target.value)}
        ></input>
        <label name="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
}

export default LogInForm;
