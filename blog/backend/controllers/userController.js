const User = require("..models/user.js");
const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");

// Create User signup form

exports.user_create_get = asyncHandler(async (req, res, next) => {
  res.send("user create form GET");
});

// Create user on POST
exports.user_create_post = asyncHandler(async (req, res, next) => {
  const user = new User({
    id: uuidv4(),
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });

  await post.save();

  res.send(post);
});
