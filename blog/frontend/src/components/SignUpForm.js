import React from "react";
import { useState } from "react";

function SignUpForm(params) {
  return (
    <>
      <form>
        <label name="name">Name</label>
        <input type="text" name="name"></input>
        <label name="username">Username</label>
        <input type="text" name="username"></input>
        <label name="password">Password</label>
        <input type="password" name="password"></input>
        <input type="submit"></input>
      </form>
    </>
  );
}

export default SignUpForm;
