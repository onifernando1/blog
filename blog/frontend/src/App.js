import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";

function App() {
  axios.defaults.withCredentials = true;

  return (
    <>
      <Home />
    </>
  );
}

export default App;
