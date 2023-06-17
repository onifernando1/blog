import { useState, setState } from "react";
import axios from "axios";
import { useEffect } from "react";

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
      <form onSubmit={createPost}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title"></input>
        <label htmlFor="information">Information</label>
        <input type="text" name="information" id="information"></input>
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image"></input>
        <input
          type="hidden"
          name="author"
          id="author"
          value={currentUser._id}
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
}

export default NewPostForm;
