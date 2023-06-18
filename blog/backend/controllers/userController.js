const User = require("../models/user.js");
const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const Post = require("../models/post.js");

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

exports.user_login_get = asyncHandler(async (req, res, next) => {
  console.log(res.locals.currentUser);
  console.log("heya heya a");
  res.json({ user: res.locals.currentUser });
});

exports.user_login_post = asyncHandler(async (req, res, next) => {
  console.log("Called");
  passport.authenticate("local", (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("http://localhost:3000/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.session.user = user;
      console.log(req.session);
      res.json(user);
    });
  })(req, res, next); // Invoke the passport.authenticate middleware function
});

// log out

exports.user_logout = asyncHandler(async (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.send("Logged out ");
});

exports.user_detail = asyncHandler(async (req, res, next) => {
  const authorPosts = await Post.find(
    { author: res.locals.currentUser._id },
    "title information"
  ).exec();
  res.json({ authorPosts: authorPosts });
});
