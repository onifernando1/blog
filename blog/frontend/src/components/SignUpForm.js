import React from "react";
import { useState, setState } from "react";
import axios from "axios";

function SignUpForm(params) {
  const [registerName, setRegisterName] = useState("");
  const [registerUserame, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const data = {
        name: registerName,
        username: registerUserame,
        password: registerPassword,
      };

      const response = await axios.post(
        "http://localhost:9000/users/signup",
        data,
        config
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={register}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setRegisterName(e.target.value)}
        ></input>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
      <div>{registerName}</div>
    </>
  );
}

export default SignUpForm;
