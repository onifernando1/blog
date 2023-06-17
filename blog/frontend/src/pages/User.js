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

  return <div>Hi User</div>;
}

export default User;
