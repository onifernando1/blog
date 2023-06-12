import React from "react";
import { useState } from "react";

function LogInForm(params) {
  return (
    <>
      <form>
        <label name="username">Username</label>
        <input type="text" name="username"></input>
        <label name="password">Password</label>
        <input type="password" name="password"></input>
        <input type="submit"></input>
      </form>
    </>
  );
}

export default LogInForm;
