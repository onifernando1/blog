import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;

  const [postList, setPostList] = useState(null);
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/posts").then((res) =>
      res.json().then((data) => setPostList(data.post_list))
    );
    axios
      .get("http://localhost:9000/users/login")
      .then((response) => {
        console.log("Login response:", response);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div>
        HEYA
        {postList && (
          <ul>
            {postList.map((post) => (
              <li key={post._id}>{post._id}</li>
            ))}
          </ul>
        )}
      </div>
      <div>{user && <div>Logged in as: {user.username}</div>}</div>
    </>
  );
}

export default App;
