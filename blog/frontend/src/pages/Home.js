import React, { useEffect } from "react";
import { useState, setState } from "react";
import axios from "axios";
import "../assets/styles/home.css";
import { Link } from "react-router-dom";

function Home(params) {
  axios.defaults.withCredentials = true;
  const [posts, setPosts] = useState([]);

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
        {/* <div>Oni Fernando blogs</div> */}
        <div className="blog-home-container">
          {posts.map((post) => {
            return (
              <>
                <Link to={`/posts/${post._id}`}>
                  <div className="individual-blog-container grow">
                    <div class="blog-image">
                      <img
                        src={require(`../assets/images/${post.image}.jpg`)}
                      ></img>
                    </div>
                    <div className="blog-title">{post.title}</div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
