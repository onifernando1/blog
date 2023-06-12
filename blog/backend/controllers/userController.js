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

exports.user_login_get = asyncHandler(async (req, res, next) => {
  res.send("GET USER LOGIN ");
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
      res.json(user);
    });
  })(req, res, next); // Invoke the passport.authenticate middleware function
});

exports.user_get = asyncHandler(async (req, res, next) => {
  res.json({ current_user: res.locals.currentUser });
});
