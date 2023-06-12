import React from "react";
import { useState, setState } from "react";

function SignUpForm(params) {
  const [registerName, setRegisterName] = useState("");
  const [registerUserame, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  return (
    <>
      <form>
        <label name="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setRegisterName(e.target.value)}
        ></input>
        <label name="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        ></input>
        <label name="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
      <div>{registerName}</div>
    </>
  );
}

export default SignUpForm;
