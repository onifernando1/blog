import { useState, setState } from "react";
import axios from "axios";

function NewPostForm(params) {
  const [newPostData, setNewPostData] = useState(null);

  const getPostData = (e) => {
    e.preventDefault();
    const newPost = {
      title: e.target[0].value,
      information: e.target[1].value,
      author: e.target[2].value,
    };
    setNewPostData(newPost);
    alert(newPost);
  };

  const newPostRequest = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9000/posts/create",
        newPostData
      );
    } catch (error) {
      console.error(error);
    }
  };

  const createPost = (e) => {
    getPostData(e);
    newPostRequest();
  };

  return (
    <>
      <form onSubmit={createPost}>
        <label>Title</label>
        <input type="text"></input>
        <label>Information</label>
        <input type="text"></input>
        <label>Author</label>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </>
  );
}

export default NewPostForm;
