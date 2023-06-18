import { useState, setState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "../assets/styles/newpost.css";

function NewPostForm(params) {
  axios.defaults.withCredentials = true;

  const [newPostData, setNewPostData] = useState(null);
  const [currentUser, setCurrentUser] = useState([]);
  const [title, setTitle] = useState("");
  const [information, setInformation] = useState("");

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

  const resetForm = () => {
    setTitle("");
    setInformation("");
  };

  const createPost = async (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      information: information,
      author: e.target.elements.author.value,
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:9000/posts/create",
        newPost,
        config
      );
      console.log(response.data);
      console.log(newPostData);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="new-post-container">
        <form className="new-post-form" onSubmit={createPost}>
          <div className="new-post-title">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              name="title"
              id="title"
              placeholder="Title"
            ></input>
          </div>
          <div>
            <textarea
              onChange={(e) => setInformation(e.target.value)}
              value={information}
              name="information"
              id="information"
              placeholder="Write your post here"
              rows="14"
              cols="10"
            ></textarea>
          </div>
          {currentUser ? (
            <input
              type="hidden"
              name="author"
              id="author"
              value={currentUser._id}
            ></input>
          ) : null}
          <div>
            <input type="submit" value="Create blog"></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewPostForm;
