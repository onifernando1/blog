import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, setState } from "react";
import LogInForm from "../components/LogInForm";
import { useNavigate } from "react-router-dom";
import "../assets/styles/user.css";

function User(params) {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [authorPosts, setAuthorPosts] = useState([]);

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

  useEffect(() => {
    axios
      .get(`http://localhost:9000/users/detail`)
      .then((response) => {
        console.log("CURRENT USER response:", response);
        setAuthorPosts(response.data.authorPosts);
        console.log("AUTHOR POSTS");
        console.log(authorPosts);
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

  const capitalizeName = () => {
    if (currentUser.name) {
      let name = currentUser.name;
      name = name.split("");
      name[0] = name[0].toUpperCase();
      name = name.join("");
      return name;
    }
  };

  return (
    <div>
      {currentUser ? (
        <div>
          <div>
            {capitalizeName()}'s posts
            <button onClick={logout}>Log out </button>
          </div>
          {authorPosts.length < 1 ? (
            <div>You have no posts</div>
          ) : (
            <div>
              <div className="home-container">
                <div className="blog-home-container">
                  {authorPosts.map((post) => {
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
          )}
          <div></div>
        </div>
      ) : null}
    </div>
  );
}

export default User;
