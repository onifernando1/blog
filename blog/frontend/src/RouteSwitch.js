import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NewPostForm from "./components/NewPostForm";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";
import Navbar from "./components/navbar";
import Post from "./components/Post";
import Profile from "./pages/Profile";
import User from "./pages/User";
import CreatePost from "./pages/CreatePost";

const RouteSwitch = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/posts/create" element={<NewPostForm />} />
          <Route path="/posts/new" element={<CreatePost />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
