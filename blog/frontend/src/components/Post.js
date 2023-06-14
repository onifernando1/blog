import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Post() {
  const { id } = useParams();
  const [postData, setPostData] = useState([]);
  const [image, setImage] = useState("beach");
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get(`http://localhost:9000/posts/${id}`)
      .then((response) => {
        console.log("Postdata response:", response);
        setPostData(response.data.postData);
        setImage(response.data.postData.image);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {postData !== null ? (
        <>
          <div>Post {id}</div>
          <div>
            <img src={require(`../assets/images/${image}.jpg`)}></img>
          </div>
          <div>{postData.title}</div>
          <div>{postData.information} </div>
        </>
      ) : null}
    </>
  );
}

export default Post;
