import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, setState } from "react";
import LogInForm from "../components/LogInForm";
import { useNavigate } from "react-router-dom";

function User(params) {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/users/login`)
      .then((response) => {
        console.log("CURRENT USER response:", response);
        setCurrentUser(response.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const logout = () => {
    axios
      .delete("http://localhost:9000/users/logout")
      .then((response) => {
        console.log("Logout response:", response);
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      {currentUser ? (
        <div>
          <div>{currentUser.name}</div>
          <div>{currentUser.username}</div>
          <div>Posts</div>
          <div>
            <button onClick={logout}>Log out </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default User;
