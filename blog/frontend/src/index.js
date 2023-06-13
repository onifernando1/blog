import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RouteSwitch from "./RouteSwitch";
import Navbar from "./components/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
