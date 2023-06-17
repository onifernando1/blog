import React, { useEffect } from "react";
import { useState, setState } from "react";
import axios from "axios";
import "../assets/styles/home.css";
import { Link } from "react-router-dom";
import LogInForm from "../components/LogInForm";
import NewPostForm from "../components/NewPostForm";

function CreatePost(params) {
  axios.defaults.withCredentials = true;

  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/users/login`)
      .then((response) => {
        console.log("CURRENT USER response:", response);
        setCurrentUser(response.data.user);
        console.log(`The current user is: ${currentUser}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {currentUser ? (
        <div>
          <NewPostForm />
        </div>
      ) : (
        <div>
          <div>Please log in to create a post...</div>
          <LogInForm />
        </div>
      )}
    </div>
  );
}

export default CreatePost;
