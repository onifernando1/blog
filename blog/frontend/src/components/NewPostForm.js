import { useState, setState } from "react";
import axios from "axios";

function NewPostForm(params) {
  const [newPostData, setNewPostData] = useState(null);

  const createPost = async (e) => {
    e.preventDefault();
    const newPost = {
      title: e.target.elements.title.value,
      information: e.target.elements.information.value,
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={createPost}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title"></input>
        <label htmlFor="information">Information</label>
        <input type="text" name="information"></input>
        <label htmlFor="author">Author</label>
        <input type="text" name="author"></input>
        <input type="submit"></input>
      </form>
    </>
  );
}

export default NewPostForm;
