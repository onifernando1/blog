import React, { useEffect } from "react";
import { useState, setState } from "react";
import axios from "axios";

function Home(params) {
  axios.defaults.withCredentials = true;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/posts")
      .then((response) => {
        console.log("Login response:", response);
        setPosts(response.data.post_list);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="home-container">
        <div>Oni Fernando blogs</div>
        <div className="blog-home-container">
          {posts.map((post) => {
            return (
              <>
                <div>
                  <img
                    src={require(`../assets/images/${post.image}.jpg`)}
                  ></img>
                </div>
                <div>{post.title}</div>
                <div>{post.information}</div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
