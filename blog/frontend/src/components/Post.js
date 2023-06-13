import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  console.log(id);
  return <div>Post {id}</div>;
}

export default Post;
