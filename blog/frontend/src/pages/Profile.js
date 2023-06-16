import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, setState } from "react";
import LogInForm from "../components/LogInForm";

function Profile(params) {
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
      <div className="user-stuff">
        <div className="login">
          <Link to="/login">Login</Link>
        </div>
        <div className="signup">
          <Link to="/signup">Sign Up</Link>
        </div>

        <div>CU:{currentUser}</div>
      </div>
      <div>
        <LogInForm />
      </div>
      <div>heya</div>
    </div>
  );
}

export default Profile;
