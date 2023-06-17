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
          <Link to="/">
            <div className="home-icon-container active">
              <div className="icon-container">
                <img
                  className="icon"
                  src={require(`../assets/images/home.png`)}
                ></img>
              </div>
              <div className="icon-text">Home</div>
            </div>
          </Link>
          <Link to="/posts/new">
            <div className="create-container">
              <div className="icon-container">
                <img
                  className="icon"
                  src={require(`../assets/images/create.png`)}
                ></img>
              </div>
              <div className="icon-text">Post</div>
            </div>
          </Link>
          <Link to="profile">
            <div className="profile-container">
              <div className="icon-container">
                <img
                  className="icon"
                  src={require(`../assets/images/user.png`)}
                ></img>
              </div>
              <div className="icon-text">Profile</div>
            </div>
          </Link>
          <div className="indicator"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
