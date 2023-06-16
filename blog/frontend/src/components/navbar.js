import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, setState } from "react";
import("../assets/styles/navbar.css");

function Navbar(params) {
  axios.defaults.withCredentials = true;

  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/users/login`)
      .then((response) => {
        console.log("CURRENT USER response:", response);
        setCurrentUser(response.data.currentUser);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
          <div className="home-container">
            <div>Home</div>
            <div>
              <img
                className="icon"
                src={require(`../assets/images/home.png`)}
              ></img>
            </div>
          </div>
          <div className="create-post-container">
            <Link to="/posts/create">Post</Link>
            <div>
              <img
                className="icon"
                src={require(`../assets/images/create.png`)}
              ></img>
            </div>
          </div>
          <div className="profile-container">
            <Link to="profile">Profile</Link>
            <div>
              <img
                className="icon"
                src={require(`../assets/images/user.png`)}
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div>
        {" "}
        <div className="user-stuff">
          <div className="login">
            <Link to="/login">Login</Link>
          </div>
          <div className="signup">
            <Link to="/signup">Sign Up</Link>
          </div>
          <div>
            <button onClick={logout}>Log out </button>
          </div>
          <div>CU:{currentUser}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
