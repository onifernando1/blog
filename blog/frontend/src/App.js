import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/posts").then((res) =>
      res.json().then((data) => setData(data))
    );
    console.log(data);
  }, []);

  return <div>HEYA</div>;
}

export default App;
