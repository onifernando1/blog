import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar(params) {
  axios.defaults.withCredentials = true;

  const logout = () => {
    axios
      .get("http://localhost:9000/users/logout")
      .then((response) => {
        console.log("Logout response:", response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/posts/create">Create Post</Link>
      <button onClick={logout}>Log out </button>
    </div>
  );
}

export default Navbar;
