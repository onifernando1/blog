import React from "react";
import { useState, setState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUpForm(params) {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const [registerName, setRegisterName] = useState("");
  const [registerUserame, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");
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
      navigate("/user");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="login-page-container">
        <div className="login-image">
          <img src={require(`../assets/images/login.jpg`)}></img>
        </div>
        <div className="login-form-container">
          <div className="form-header"></div>

          <form onSubmit={register}>
            <div className="sign-in-link">SIGN UP</div>
            <div className="username-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setRegisterName(e.target.value)}
              ></input>
            </div>
            <div className="username-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => setRegisterUsername(e.target.value)}
              ></input>
            </div>
            <div className="password-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setRegisterPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                className="login-submit"
                type="submit"
                value="SIGN UP"
              ></input>
            </div>
            <Link to="/login">
              <div className="sign-up-link-container">
                Already have an account?
              </div>
            </Link>
          </form>
        </div>
      </div>

      {/* <form onSubmit={register}>
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
      </form> */}
    </>
  );
}

export default SignUpForm;
