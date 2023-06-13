import React, { useEffect } from "react";
import { useState, setState } from "react";
import axios from "axios";
import "../assets/styles/home.css";

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

  const viewTitle = () => {};

  return (
    <div>
      <div className="home-container">
        {/* <div>Oni Fernando blogs</div> */}
        <div className="blog-home-container">
          {posts.map((post) => {
            return (
              <>
                <div
                  onMouseOver={viewTitle}
                  className="individual-blog-container"
                >
                  <div class="blog-image">
                    <img
                      src={require(`../assets/images/${post.image}.jpg`)}
                    ></img>
                  </div>
                  <div className="blog-title">{post.title}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
