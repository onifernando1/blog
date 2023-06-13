import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import("../assets/styles/navbar.css");

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
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Oni</Link>
        </div>

        <div className="links-container">
          <div className="user-stuff">
            <div>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <Link to="/signup">Sign Up</Link>
            </div>
            <div>
              <button onClick={logout}>Log out </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
