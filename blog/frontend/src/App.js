import React, { useState, useEffect } from "react";

function App() {
  const [postList, setPostList] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/posts").then((res) =>
      res.json().then((data) => setPostList(data.post_list))
    );
  }, []);

  return (
    <div>
      HEYA
      {postList && (
        <ul>
          {postList.map((post) => (
            <li key={post._id}>{post._id}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
