const Post = require("../models/post");
const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");

//Show all posts

exports.post_list = asyncHandler(async (req, res, next) => {
  const allPosts = await Post.find({}).exec();
  res.json({ title: "Post list", post_list: allPosts });
});

// Show specific post

exports.post_detail_get = asyncHandler(async (req, res, next) => {
  console.log("Method is called");
  const post = await Post.findById(req.params.id);
  if (post === null) {
    const err = new Error("Post not found");
    err.status = 404;
    return next(err);
  }
  res.send({ postData: post });
});

// Post create form

exports.post_create_get = asyncHandler(async (req, res, next) => {
  res.send("post create GET");
});

// Create post on POST
exports.post_create_post = asyncHandler(async (req, res, next) => {
  const post = new Post({
    id: uuidv4(),
    title: req.body.title,
    information: req.body.information,
    image: req.body.image,
    author: req.body.author,
  });

  await post.save();

  res.send(post);
});

//Display delete form on GET
exports.post_delete_get = asyncHandler(async (req, res, next) => {
  res.send("delete post form GET");
});

// Handle delete on POST
exports.post_delete_post = asyncHandler(async (req, res, next) => {
  req.send("delete post POST");
});

// Display Author update form on GET.
exports.post_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: post update GET");
});

// Handle Author update on POST.
exports.post_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: post update POST");
});
