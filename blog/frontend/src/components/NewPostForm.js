import { useState, setState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "../assets/styles/newpost.css";

function NewPostForm(params) {
  axios.defaults.withCredentials = true;

  const [newPostData, setNewPostData] = useState(null);

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

  const createPost = async (e) => {
    e.preventDefault();
    const newPost = {
      title: e.target.elements.title.value,
      information: e.target.elements.information.value,
      author: e.target.elements.author.value,
      image: e.target.elements.image.value,
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="new-post-container">
        <form className="new-post-form" onSubmit={createPost}>
          <div>
            {/* <label htmlFor="title">Title</label> */}
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
            ></input>
          </div>
          <div>
            <textarea
              name="information"
              id="information"
              placeholder="Write your post here"
              rows="14"
              cols="10"
            ></textarea>
          </div>
          {/* <div>
          <label htmlFor="image">Image</label>
          <input type="text" name="image" id="image"></input>
        </div> */}
          <input
            type="hidden"
            name="author"
            id="author"
            value={currentUser._id}
          ></input>
          <div>
            <input type="submit" value="Create blog"></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewPostForm;
