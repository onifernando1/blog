import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Post() {
  const { id } = useParams();
  const [postData, setPostData] = useState([]);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get(`http://localhost:9000/posts/${id}`)
      .then((response) => {
        console.log("Postdata response:", response);
        setPostData(response.data.postData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div>Post {id}</div>
      <div>{postData.title}</div>
    </>
  );
}

export default Post;
