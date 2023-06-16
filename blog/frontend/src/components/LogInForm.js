import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogInForm(params) {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState("");

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

      console.log(data);

      const response = await axios.post(
        "http://localhost:9000/users/login",
        data,
        config
      );

      setUser(response.data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!user ? (
        <div>
          <div>
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
              <input type="submit" value="Log in"></input>
            </form>
            <div>U:{user.username}</div>
          </div>
        </div>
      ) : (
        <>
          <div>You are logged in as: {user.username}</div>
        </>
      )}
    </>
  );
}

export default LogInForm;
