const User = require("../models/user.js");
const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const passport = require("passport");
const bcrypt = require("bcryptjs");

// Create User signup form

exports.user_create_get = asyncHandler(async (req, res, next) => {
  res.send("user create form GET");
});

// Create user on POST
exports.user_create_post = asyncHandler(async (req, res, next) => {
  try {
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(req.body.password, 10, (err, hashed) => {
        if (err) {
          reject(err);
        }
        resolve(hashed);
      });
    });

    const user = new User({
      username: req.body.username,
      password: hashedPassword,
      name: req.body.name,
    });
    const result = await user.save();
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
});
