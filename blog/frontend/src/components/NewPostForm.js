import { useState, setState } from "react";

function NewPostForm(params) {
  const [newPostData, setNewPostData] = useState(null);

  const createPost = (e) => {
    e.preventDefault();
    const newPost = {
      title: e.target[0].value,
      information: e.target[1].value,
      author: e.target[2].value,
    };
    setNewPostData(newPost);
    alert(newPost);
    console.log(newPost);
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
