import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NewPostForm from "./components/NewPostForm";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts/create" element={<NewPostForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
