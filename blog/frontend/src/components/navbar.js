import React from "react";
import { Link } from "react-router-dom";

function Navbar(params) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/posts/create">Create Post</Link>
    </div>
  );
}

export default Navbar;
